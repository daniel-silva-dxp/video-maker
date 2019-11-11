const readline = require('readline-sync') //Biblioteca Readline-Sync
const robots = {
    text: require('./robots/text')
}

async function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()//Retorno do termo de busca
    content.prefix = askAndReturnPrefix()//Retorno do prefixo de busca

    await robots.text(content)

    //Perguntando pelo termo de busca
    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikpedia search term: ')
    }

    //Perguntando pelo prefixo
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }

    console.log(content)

}

start()