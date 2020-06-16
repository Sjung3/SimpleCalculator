//Changes the display to what ever the user inputs. Can also use querySelector and a # to get the ID
let displayInput = document.querySelector('#display-input');
let btns = document.querySelectorAll('.button');

for (let btn of btns)
    btn.addEventListener('click', function () { clickedBtn(this) });

//gets the HTMLs button-info and passes the value in to the function
function clickedBtn(obj) {
    //Takes takes the content of the clickBtn and creates variable clicked
    let clicked = obj.textContent;

    // When = is clicked the displayInput is read and argument gets executed
    if (clicked == '=') {
        displayInput.textContent = eval(displayInput.textContent);

        // DisplayInput reset to 0 when DELETE is clicked
    } else if (clicked == 'DELETE') {
        displayInput.textContent = '0';
    }

    //Prevents input of multiple ops btn characters
    else if ((clicked == '+' || clicked == '-' || clicked == '*' || clicked == '/' || clicked == '.') && (displayInput.textContent.slice(-1) == '+' || displayInput.textContent.slice(-1) == '-' || displayInput.textContent.slice(-1) == '*' || displayInput.textContent.slice(-1) == '/' || displayInput.textContent.slice(-1) == '.')) {
        displayInput.textContent.substr(displayInput.length - 1);
    }

    //Updates the display with whatever the user clicks
    else {
        if (displayInput.textContent == '0') {
            displayInput.textContent = clicked;
        }
        //Adds on whatever the user clicks next
        else {
            displayInput.textContent += clicked;
        }
    }
}