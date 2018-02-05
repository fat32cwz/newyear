$(document).ready(function(){
    getResources = function(resourcesList,totalCallback){

        var l = new Component('loading');
        l.hide();
        l.mount();
        l.show();
        l.rerender('total',100);

        var doneCount = 0;
        var statusList = [];
        
        resourcesList.map(function(value,index){
            statusList.push({total:0,loaded:0});
            $.ajax({
                type:'GET',
                url:jQuery.isArray(value) ? value[0] : value,
                xhrFields:{
                    onprogress:function(event){
                        //Download progress
                        if(event.lengthComputable){
                            var total = event.total;
                            var loaded = event.loaded;

                            statusList[index].total = total;
                            statusList[index].loaded = loaded;

                            l.rerender('loaded',100 * statusList.reduce(function(accumulator,value,index,array){
                                return accumulator + (value.loaded / value.total) * (1 / array.length);
                            },0));

                            if(total && (total === loaded)){
                                itemDone(jQuery.isArray(value) ? value[1] : value);
                            }
                        }
                    }
                },
                error:function(jqXHR,textStatus,errorThrown){
                    //document.location.reload();
                    //console.log(errorThrown);
                    //alert(textStatus + ' ' + errorThrown);
                },
                success:function(){
                    //console.log('file connected.');
                }
            });

        });

        function itemDone(callback){
            doneCount++;
            if(jQuery.isFunction(callback)){
                callback();
            }
            if(doneCount === resourcesList.length){
                allDone();
            }
        }
        
        function allDone(){
            if(jQuery.isFunction(totalCallback)){
                setTimeout(function(){
                    totalCallback(l);
                },600);
            }

            $('body').trigger(getResources.options.eventName,[l]);
        }
    }

    jQuery.extend(
        getResources,
        {
            options:{
                eventName:'loading-done'
            }
        }
    );

    console.log('version conflict test.');

    // //test
    // var resourceList = [];
    // for(var i = 0;i < 9;++i){
    //     resourceList.push('./src/image/location/0' + (i + 1) + '.jpg');
    // }
    // resourceList.push('../1/video/bon.mp4');

    // getResources(resourceList,function(){console.log('alldone')});
    // // getResources(resourceList,function(plugin){console.log('alldone');plugin.hide()});
    // // // $('body').on('loading-done',()=>{console.log('loading-done')});
});