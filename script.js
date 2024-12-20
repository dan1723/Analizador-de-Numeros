let grupNum = []
let res = document.getElementById('res')

function adicionar(){
    let num = document.getElementById('txtn')
    let list = document.getElementById('selttab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let numero = Number(num.value)

        
        if(grupNum.indexOf(numero) != -1 || numero < 1 || numero > 100){
            window.alert('Valor invalido ou já encontrado na lista.')

            num.value = ''
            num.focus()
        }else{

            grupNum.push(numero) // Adiciona o número ao array

            let item = document.createElement('option')
            item.text = `Valor ${numero} adicionado.`
            list.appendChild(item)
            res.innerHTML = ''

            num.value = ''
            num.focus()
        }
    }

}



function finalizar(){

    if(grupNum.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{ 
        let t = grupNum.length
        let maior = grupNum[0]
        let menor = grupNum[0]

        for(let pos in grupNum){
            if(grupNum[pos] > maior){
                maior = grupNum[pos]
            }
            if(grupNum[pos] < menor){
                menor = grupNum[pos]
            }
        }

        let somar = 0

        for(i = 0; i < grupNum.length; i++){
            somar += grupNum[i]
        }

        let med = somar/t

        res.innerHTML = ''

        res.innerHTML = `Ao todo, temos ${t} números cadastrados. </br></br>`

        res.innerHTML += `O menor valor informado foi ${menor}.</br></br>`

        res.innerHTML += `O maior valor informado foi ${maior}.</br></br>`

        res.innerHTML += `Somando todos os valores, temos: ${somar}.</br></br>`

        res.innerHTML += `A média dos valores digitados é ${med}.`
    }

}