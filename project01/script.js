let quoteApiUrl = 'https://type.fit/api/quotes'
let quoteContainer = document.querySelector('.quote-container')
let quoteContent = document.querySelector('.quote-content')
let quoteAuthor = document.querySelector('.quote-author > span')
let loader = document.querySelector('.loader')
const fetchQuotes = () => {
    return fetch(quoteApiUrl).then(response => response.json())
}

const complete = () => {
    loader.hidden=true
    quoteContainer.hidden=false
}

const loading = () => {
    quoteContainer.hidden=true
    loader.hidden=false
}

const getNewQuote = () => {
    loading()
    fetchQuotes().then(res=>{
        let random = Math.floor(Math.random() * res.length);
        quoteContent.innerHTML=res[random].text
        quoteAuthor.innerHTML=res[random].author
    }).catch(err=>{
        console.log(err)
    }).finally(()=>{
        complete()
    })
    
}