const [inputBox1, inputBox2] = document.querySelectorAll('.input-box');
const [outputBox1, outputBox2] = document.querySelectorAll('.output-box');
const [actButton1, actButton2] = document.querySelectorAll('.send-button');
const [warnText1, warnText2] = document.querySelectorAll('.warning-text');

outputBox1.value = '';
outputBox2.value = '';

actButton1.addEventListener('click', () => {
    if( !inputBox1.value ) {
        inputBox1.style.border = 'solid 1px red';
        warnText1.hidden = false;
    } else {
        outputBox2.value = inputBox1.value;
        warnText1.hidden = true;
        inputBox1.style.border = 'solid 1px grey';
        inputBox1.value = '';
    }
});

actButton2.addEventListener('click', () => {
    if( !inputBox2.value ) {
        inputBox2.style.border = 'solid 1px red';
        warnText2.hidden = false;
    } else {
        outputBox1.value = inputBox2.value;
        warnText2.hidden = true;
        inputBox2.style.border = 'solid 1px grey';
        inputBox2.value = '';
    }
});