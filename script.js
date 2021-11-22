function tabuada (){
var x = 9;
var resultado;
for(let i = 0; i <=10; i++ ){
resultado = `${x} x ${i} = ${x * i} `
console.log(resultado);
document.getElementsByTagName('div')[i].innerHTML = resultado;
}
}
