const url = new URLSearchParams(window.location.search);
const docid = url.get('docid');
const button = document.querySelector('.button');
const body = document.querySelector('.fullscreen');

function handlerFunction(){
    button.setAttribute('disabled', 'disabled');
    body.classList.add('fullscreen_active');
    db.collection("rounds").doc(docid).update({
        round: firebase.firestore.FieldValue.increment(1.3)
    });
    setTimeout(function(){
        body.classList.remove('fullscreen_active');
        button.removeAttribute('disabled');
    }, 3350);
}

document.querySelector('.button').addEventListener('click', handlerFunction, false);

