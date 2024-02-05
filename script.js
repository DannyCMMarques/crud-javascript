const usuario=[];
const nome=document.querySelector("#nome");
const senha=document.querySelector("#senha");

function cadastrar(event){
console.log(nome.value);
console.log(senha.value);
usuario.push({id:usuario.length + 1, nome:nome.value, senha:senha.value});
atualizarUsuário();
}
function remover(index){
    console.log(index)
    usuario.splice(index,1);
    console.log("funcionando");
    atualizarUsuário();
}
function atualizarUsuário(){
    let tabela= document.querySelector("table").getElementsByTagName("tbody")[0];
    tabela.innerHTML="";
    for(var i=0; i < usuario.length; i++){
        let tr=tabela.insertRow(i);
        let td1=tr.insertCell(0);
        let td2=tr.insertCell(1);
        let td3=tr.insertCell(2);
        td1.innerHTML=usuario[i].nome;
        td2.innerHTML=usuario[i].senha;
        td3.innerHTML = '<button class="btn btn-danger" onclick="remover(' + i + ')">Remover</button>';
    }

}