// Getting modal to store in a variable
let witchPop=document.getElementById('witch__pop_up');

// Setting 3s timer for modal
let id=setTimeout(function(){
    if (sessionStorage.getItem('modal') !== 'true') {
    witchPop.style.display='block';
    overlay.classList.add('active');
    sessionStorage.setItem('modal','true')}
return;}, 3000);

// Closing the modal
witch_close.addEventListener('click',function(){
    witchPop.style.display='none';
    overlay.classList.remove('active');
})

