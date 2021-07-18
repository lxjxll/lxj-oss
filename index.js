window.onload = function (){
        document.body.innerHTML = '<div id="live2d" class="live2d">\n' +
                        '\t<canvas id="live2dm" class="live2d" style="z-index: 999!important;"></canvas>\n' +
                        '</div>'
}
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
                    loadScript('https://cdn.jsdelivr.net/combine/npm/luxiaojie-oss@1.0.4/pixi.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismcore.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismframework.min.js,npm/luxiaojie-oss@1.0.4/live2dcubismpixi.min.js,npm/luxiaojie-oss@1.0.4/load.js',function(){
                        loadModel();
})
                }
            }
        }
    }
loadlive2d()
