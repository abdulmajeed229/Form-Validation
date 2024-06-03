let userName = document.getElementById('userName');

let email = document.getElementById('userEmail');

let subject = document.getElementById('userSubject');

let textArea = document.getElementById('textArea');

let text = document.getElementById('text');

let btn = document.getElementById('btn');




btn.addEventListener('click', function () {

    if (userName.value =="" || email.value =="" || subject.value =="" || textArea.value =="") {

        text.innerText = " Please Input Information "

    } else {

        text.innerText = " Successfuly Submited ✔ " ;
    };

});

