window.onload = function() {
    var display = document.querySelector('.display');
    var displayTotal = document.querySelector('.displayTotal');
    var item = document.querySelectorAll('.item');
    var element = null;
    for (var i = 0; i < item.length; i++) {
        var element = item[i]
        console.log(element);
        element.addEventListener('click', function() {
            if (this.innerHTML == '-') {
                display.textContent = display.textContent
            } else {
                display.textContent = this.innerHTML;
            }
        })
    }    
    console.log(seven);
}

