window.onload = function() {

    var display = document.querySelector('.display');
    var displayTotal = document.querySelector('.displayTotal');
    var numberSelect = '';
    var numberSelectCount = 0;
    var numberSelectTotal = '';
    var erase = false;
    var sum = 0;
    var count = 0;
    var sign;
    var eq = false;

    display.textContent = '0';
    displayTotal.textContent = '';

    // function number() {
    //     display.textContent = 0;
    //     number.addEventListener('click', function() {

    //     })
    // }

    one.addEventListener('click', function() {
        display.textContent = one.textContent;
        numberSelect = 1;
    })
    two.addEventListener('click', function() {
        display.textContent = two.textContent;
    })
    three.addEventListener('click', function() {
        display.textContent = three.textContent;
    })
    four.addEventListener('click', function() {
        display.textContent = four.textContent;
    })
    five.addEventListener('click', function() {
        display.textContent = five.textContent;
    })
    six.addEventListener('click', function() {
        display.textContent = six.textContent;
    })
    seven.addEventListener('click', function() {
        display.textContent = seven.textContent;
    })
    eight.addEventListener('click', function() {
        display.textContent = eight.textContent;
    })
    nine.addEventListener('click', function() {
        if (erase) {
            displayTotal.textContent = sum + ' +';
            numberSelect = '9';
            numberSelectTotal += numberSelect;  // строка
            numberSelectCount = +(numberSelectTotal); // число
            display.textContent = numberSelectTotal;
        } else {
            // displayTotal.textContent = numberSelect + ' +';
            numberSelect = '9';
            numberSelectTotal += numberSelect;  // строка
            numberSelectCount = +(numberSelectTotal); // число
            display.textContent = numberSelectTotal;
        }
    })
    plus.addEventListener('click', function() {
        if (erase) {
            displayTotal.textContent = display.textContent + ' + ';
            // display.textContent = display.textContent;
        } else {
        sign = 'plus';
        // count = true;
        sum += numberSelectCount;
        displayTotal.textContent += numberSelectTotal + ' + ';
        numberSelectTotal = '';
        display.textContent = sum;
        }
    })
    minus.addEventListener('click', function() {
        sign = 'minus';
        count = numberSelectCount;
        sum -= numberSelectCount;
        displayTotal.textContent += display.textContent + ' - ';
        numberSelectTotal = '';
        display.textContent = sum;
    })
    equally.addEventListener('click', function() {
        eq = true;
        // count = true;
        erase = true;
        switch(sign) {
            case 'plus':
                displayTotal.textContent += numberSelectCount + ' = ';
                numberSelectTotal = '';
                sum += numberSelectCount;
                display.textContent = sum;
                    // displayTotal.textContent = sum + ' + ' + numberSelectCount + ' = ';
                    // numberSelectTotal = '';
                    // sum += numberSelectCount;
                    // display.textContent = sum;
                break;
            case 'minus':
                displayTotal.textContent -= numberSelectCount + ' = ';
                numberSelectTotal = '';
                sum -= numberSelectCount;
                display.textContent = sum;
                    // displayTotal.textContent = sum + ' + ' + numberSelectCount + ' = ';
                    // numberSelectTotal = '';
                    // sum += numberSelectCount;
                    // display.textContent = sum;
                break;
        }
        
    })
    // erase.addEventListener('click', function() {
    //     display.textContent = 0;
    //     displayTotal.textContent = '';
    //     numberTotal = 0;
    // })
    
}
