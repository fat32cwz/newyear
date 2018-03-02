$('document').ready(function(){
    //options
    var imagePath = './images/';

    Component.register('loading',{
        data: {
            total:0,
            loaded:0
        },
        render: function(){
            var DOM = this.DOM;
            var precentage = this.loaded / this.total;

            DOM.$root = $("#loading");
            DOM.$progress = $('<div class="progress">');
            precentage = isNaN(precentage) ? 0 : precentage * 100;
            DOM.$progressBar = $('<div class="progress-bar" style="width:'+ precentage +'%">');

            var $gifAnimate = $('<img>').attr('src',imagePath + 'loading.gif').addClass('icon');
            DOM.$hint = $('<img>').attr('src',imagePath + 'hint.png').addClass('hint');
            // DOM.$hint1 = $('<p>').addClass('hint1').text('坐稳了，');
            // DOM.$hint2 = $('<p>').addClass('hint2').text('我们将登入一个新视界！');
            // var $hint = $('<div>').addClass('hint').append(
            //     DOM.$hint1,
            //     DOM.$hint2
            // );

            this.append(
                $gifAnimate,
                DOM.$hint,
                DOM.$progress.append(
                    DOM.$progressBar
                )
            )
        },
        method: {
            proceed: function(){
                var precentage = this.loaded / this.total;
                precentage = isNaN(precentage) ? 0 : precentage * 100;
                this.DOM.$progressBar.css('width',precentage + '%');
            },
            show: function(){
                var DOM = this.DOM;
                DOM.$root.css('display','');
                DOM.$hint.fadeIn(2000);
            },
            hide: function(){
                this.DOM.$root.css('display','none');
            }
        },
        rerender: {
            total: function(){
                this.proceed();
            },
            loaded: function(){
                this.proceed();
            }
        }
    });
});
