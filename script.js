/*var elemt = document.getElementsByTagName('body');
elemt.addEventListener('onload', () =>{

})*/
function primeiraAcaoDaPag(){
var capit01 = document.getElementsByTagName('p')[0].innerHTML = 'Pernambuco (PE) - Recife'.toUpperCase();
var capit02 = document.getElementsByTagName('p')[1].innerHTML = 'Paraíba (PB) - João Pessoa.'.toUpperCase();
var capit03 = document.getElementsByTagName('p')[2].innerHTML = 'Alagoas (AL) - Maceió'.toUpperCase();
var capit04 = document.getElementsByTagName('p')[3].innerHTML = 'Rio Grande do Norte (RN) - Natal.'.toUpperCase();
var capit05 = document.getElementsByTagName('p')[4].innerHTML = 'Maranhão (MA) - São Luís'.toUpperCase();
}
var elemen = document.getElementsByTagName('p');
var cncl = document.getElementById('botao');
cncl.addEventListener('click', () =>{
 
 if(elemen == elemen.innerHTML){ 
     elemen.innerHTML = '';
 }   
})