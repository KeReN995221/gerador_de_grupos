function gerarGrupos(lista, num, tamanho) {
    let quantidadeGrupos = Math.ceil(tamanho / num);
    let grupos = [];
    
    for (let i = 0; i < quantidadeGrupos; i++) {
        let grupo = lista.splice(0, num);
        grupos.push(grupo);
    }
    
    return grupos;
}


function gerar(){
    let nomes = document.getElementById("lista_nomes").value;
    let num = document.getElementById("num_people_for_group").value;
    let lista = nomes.split(",");
    var tamanho = lista.length; 
    Array.isArray(lista);
    
    if(tamanho % num !== 0){
        var erro = "Não é possível criar os grupos pois não é possivel dividir a quantidade de pessoas informadas pelo numero de pessoas por grupo desejado!";
        document.getElementById("grupos").innerText=erro;
        navigator.clipboard.writeText(erro);
        return;
    }else{
        var i, num_aleatorio, aux_list;
        for(i = tamanho; i;){
            num_aleatorio = Math.random() * i-- | 0;
            aux_list = lista[num_aleatorio];
            lista[num_aleatorio] = lista[i];
            lista[i] = aux_list;
                      
        } 

        var grupos = gerarGrupos(lista, num, tamanho);
        grupos.forEach((grupo, index) => {
            console.log(`Grupo ${index + 1}: ${grupo.join(', ')}`);
        });
    }

     

}
    

