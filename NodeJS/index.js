const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar",
    "O que me deixou feliz hoje?"
]
const ask = (index = 0) => {// funçao
    process.stdout.write(questions[index] + "\n\n\n")

     // new line \n process tem a mesma funçao de console.log para exibir,
     // a diferenca é que exibido no terminal

}
ask()

const answers = [] //array pra receber as respostas
process.stdin.on ("data", data =>{ 
    answers.push(data.toString().trim())
    if (answers.length < questions.length){// enquanto a o tamanho de respostas for menor que perguntas apresente 
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
   
})