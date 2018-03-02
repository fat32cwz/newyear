$(document).ready(function(){
    var $body = $('body');
    
    getResources = function(resourcesList,totalCallback){

        var l = new Component('loading');
        l.mount();
        l.show();
        l.rerender('total',100);

        var doneCount = 0;
        var statusList = [];
        var loaded = false;
        var currentLoaded = null;
        
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
                                var itemPercentage = value.total === 0 ? 0 : (value.loaded / value.total);
                                return accumulator + itemPercentage * (1 / array.length);
                            },0));

                            $('#loading-test').text(100 * statusList.reduce(function(accumulator,value,index,array){
                                var itemPercentage = value.total === 0 ? 0 : (value.loaded / value.total);
                                return accumulator + itemPercentage * (1 / array.length);
                            },0));

                            if(total && (total === loaded)){
                                itemDone(jQuery.isArray(value) ? value[1] : value);
                            }
                        }
                    }
                },
                error:function(jqXHR,textStatus,errorThrown){
                    document.location.reload();
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
            if(!loaded){
                totalCallback(l);
                loaded = true;
            }
        }

        var lastCheckLoaded = 0;
        var intervalId = setInterval(function(){
            if(lastCheckLoaded === currentLoaded){
                allDone();
                clearInterval(intervalId);
            }else{
                lastCheckLoaded = currentLoaded;
            }
        },5000);
    }

    jQuery.extend(
        getResources,
        {
            options:{
                eventName:'loading-done'
            }
        }
    );


    $('body').on('load',function(e,resourceList){
        var minTime = 2000;
        var startTime = Date.now();
        getResources(resourceList,function(component){
            var duringTime = Date.now() - startTime;
            if(duringTime > minTime){
                process();
            }else{
                setTimeout(process,minTime - duringTime);
            }

            function process(){
                $('body').trigger('loaded');
                setTimeout(function(){
                    component.hide();
                },3000);
            }
        });
    })

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