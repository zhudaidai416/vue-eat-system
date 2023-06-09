export function BMPGL(v7xbWONxqi3QBM51NUTEal1ADCKEUuZ5) {
    return new Promise(function(resolve, reject) {
    window.init = function() {
    // eslint-disable-next-line
    resolve(BMapGL)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = "https://api.map.baidu.com/api?type=webgl&v=1.0&ak='v7xbWONxqi3QBM51NUTEal1ADCKEUuZ5'&callback=init"
    script.onerror = reject
    document.head.appendChild(script)
    }) }