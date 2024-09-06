function calcularImpacto() {
    // Coletar valores inseridos pelo usuário
    let sangue = parseInt(document.getElementById("doacaoSangue").value) || 0;
    let arvores = parseInt(document.getElementById("arvoresPlantadas").value) || 0;
    let roupas = parseInt(document.getElementById("roupasDoadas").value) || 0;
    let papel = parseInt(document.getElementById("papelReciclado").value) || 0;
    let agua = parseInt(document.getElementById("economiaAgua").value) || 0;
    let transporte = parseInt(document.getElementById("transportePublico").value) || 0;
    let voluntariado = parseInt(document.getElementById("voluntariado").value) || 0;
    let refeicoes = parseInt(document.getElementById("refeicoesVegetarianas").value) || 0;
    let garrafas = parseInt(document.getElementById("garrafasReutilizadas").value) || 0;
    let sacolas = parseInt(document.getElementById("sacolasReutilizadas").value) || 0;
    let lixo = parseInt(document.getElementById("lixoEletronico").value) || 0;
    let alimentos = parseInt(document.getElementById("alimentosDoados").value) || 0;
    let energia = parseInt(document.getElementById("energiaRenovavel").value) || 0;
    let carona = parseInt(document.getElementById("caronaSolidaria").value) || 0;
    let compostagem = parseInt(document.getElementById("compostagem").value) || 0;

    // Cálculos de impacto
    let vidasSalvas = sangue * 3; 
    let co2Reduzido = (arvores * 22) + (transporte * 0.2) + (energia * 0.5) + (carona * 0.2); 
    let residuosEvitados = (roupas * 5) + (garrafas * 0.5) + (sacolas * 0.01) + (lixo * 4) + (compostagem * 0.1);
    let alimentosImpacto = alimentos; 
    let horasVoluntariado = voluntariado;
    let refeicoesImpacto = refeicoes * 2.5;
    let papelImpacto = papel * 30;
    let aguaEconomizada = agua * 5;

    // Exibir resultados
    document.getElementById("resultado").innerHTML = `
        <strong>Impacto das suas ações:</strong><br>
        Vidas salvas: ${vidasSalvas}<br>
        CO₂ reduzido: ${co2Reduzido.toFixed(2)} kg<br>
        Resíduos evitados: ${residuosEvitados.toFixed(2)} kg<br>
        Alimentos doados: ${alimentosImpacto} pessoas alimentadas<br>
        Horas de voluntariado: ${horasVoluntariado} horas<br>
        CO₂ evitado por refeições vegetarianas: ${refeicoesImpacto.toFixed(2)} kg<br>
        Árvores preservadas pela reciclagem de papel: ${papelImpacto} árvores<br>
        Água economizada: ${aguaEconomizada} kg de CO₂ evitado
    `;
}
