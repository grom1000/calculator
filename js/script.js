window.onload = function() {
    var display = document.querySelector('.display');
    var displayTotal = document.querySelector('.displayTotal');
    var count = 0;
    var sign = document.querySelectorAll('#sign');
    var number = document.querySelectorAll('#number');
    var equally = document.querySelector('#equally');
    var arr = ['*', '-', '+', '='];
    var a = null;
    var b = null;
        number.forEach(function(element) {
            element.addEventListener('click', function() {
                        display.textContent = this.innerHTML;
                        count = Number(this.innerHTML);
                })
                
        })
        sign.forEach(function(element) {
            element.addEventListener('click', function() {
                        displayTotal.textContent = display.textContent + ' ' + this.innerHTML;
                })
                
        })
        function equallyTotal() {
            displayTotal.textContent = displayTotal.textContent + ' ' + display.textContent + ' ' + '=';
            display.textContent = Number('displayTotal.textContent');
        }
    
    equally.onclick = equallyTotal;
    console.log(count);
    
    
    // for (var i = 0; i < item.length; i++) {
    //     var element = item[i]
    //     console.log(element);
    //     element.addEventListener('click', function() {
    //         if (this.innerHTML == '-') {
    //             display.textContent = display.textContent
    //         } else {
    //             display.textContent = this.innerHTML;
    //         }
    //     })
    // }
}

