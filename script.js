

var h1Id=document.getElementById('h1');
var buttonId=document.getElementById('button');
var counter=localStorage.getItem('counter') ?? 0;
h1Id.textContent = '📀' + counter;

buttonId.addEventListener('click', function(){
    counter++;
    h1Id.textContent='📀'+counter;
    localStorage.setItem('counter', counter);
});