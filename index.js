function loadScript(src, callback) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.src = src;
        if (script.addEventListener) {
            script.addEventListener('load', function () {
                callback();
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function () {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    callback();
                }
            });
        }
        head.appendChild(script);
    }
    function loadlive2d() {
        if (document.body.clientWidth > 600) {
            document.onreadystatechange = function () {
                if (document.readyState == "complete") {
                    loadScript('https://cdn.jsdelivr.net/combine/gh/lxjxll/lxj-oss@latest/pixi/pixi.min.js,gh/lxjxll/lxj-oss@latest/core/live2dcubismcore.min.js,gh/lxjxll/lxj-oss@latest/framework/live2dcubismframework.min.js,gh/lxjxll/lxj-oss@latest/framework/live2dcubismpixi.min.js,gh/lxjxll/lxj-oss@latest/load.js',function(){
                        loadModel();
})
                }
            }
        }
    }
loadlive2d()