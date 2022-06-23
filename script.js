function IRRF(){

const span = document.getElementById("span");
const salario = Number(document.getElementById("salarioBruto").value);
let salarioLiquido = 0;
let deducao = 0;


salarioLiquido = salario;
if (salario <= 1903.98){
    salarioLiquido = salario;
}else if (salario >= 1903.99 && salario <= 2826.65){
         deducao = salario * 0.075 - 142.80
         salarioLiquido = salario - deducao
    } else if (salario >= 2826.66 && salario <= 3751.05){
            deducao = salario * 0.15 - 354.80
            salarioLiquido = salario - deducao
        } else if (salario >= 3751.06 && salario <= 4664.68){
                deducao = salario * 0.225 - 636.13
                salarioLiquido = salario - deducao
            } else {
                deducao = salario * 0.275 - 869.36
                salarioLiquido = salario - deducao
            }
span.innerHTML = salarioLiquido;      
} 