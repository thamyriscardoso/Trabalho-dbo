let button = document.getElementById('cadastrar');
let div = document.getElementsByTagName('div')[0];
let div2= document.getElementById('ta');
let div3= document.getElementById('sla');
let div4= document.getElementsByClassName('serie');
let button2= document.getElementById('temp');
const form= document.querySelector('form');
button.addEventListener('click',function(){
    div.style.display = 'block';
    button.style.display = 'none';
});
button2.addEventListener('click',function(){
    numtemp(parseInt(document.getElementById('qt').value));
    form.removeChild(form.childNodes[5]);
    div.appendChild(form);
    div4[0].style.display = 'none';
    div4[1].style.display = 'none';
    div4[2].style.display = 'none';
});
function numtemp(a) {
    for (var i = 0; i < a; i++) {
      b=i+1;
      button2.style.display = 'none';
      div2.style.display = 'block';
      c=document.createElement('br');
      div2.appendChild(c);
      c=document.createElement('label');
      c.innerText=(b) + 'ª Temporada';
      div2.appendChild(c);
      c=document.createElement('input');
      c.setAttribute("class","nserie form-control");
      c.setAttribute("placeholder", "Quantos episódios tem essa temporada?");
      div2.appendChild(c);
    }
}
function aparecer(a){
    a.className= "btn btn-danger ta1";
}