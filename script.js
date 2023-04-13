 //variables
 let greencan = document.querySelector('.producto-1');

 let pinkcan = document.querySelector('.producto-3');

 let yellowcan = document.querySelector('.producto-2');

 let bodystyle = document.querySelector('body');

 let desing  = document.querySelector('.imagen');

 //event
 yellowcan.addEventListener('click', ()=>{
    desing.classList.remove('green');
    desing.classList.remove('pink')

       desing.classList.add('yellow');

       bodystyle.classList.add('yellow')
     
       bodystyle.classList.remove('green')
       bodystyle.classList.remove('pink');
 })




 pinkcan.addEventListener('click', ()=>{
    desing.classList.remove('green');
    desing.classList.remove('yellow')

       desing.classList.add('pink');

       bodystyle.classList.add('pink')
     
       bodystyle.classList.remove('green');
       bodystyle.classList.remove('yellow');
 })





 greencan.addEventListener('click', ()=>{
    desing.classList.remove('yellow');
    desing.classList.remove('pink')

       desing.classList.add('green');

       bodystyle.classList.add('green')
     
       bodystyle.classList.remove('yellow')
       bodystyle.classList.remove('pink');
 })




 