var somar = () =>{
    var idadeDoCliente = document.getElementById('idade');
    document.getElementsByTagName('p')[0].innerHTML = `Daqui a 10 anos você terá ${Number(idadeDoCliente.value) + 10} anos`.toUpperCase()
}