let quoteApiUrl = 'https://type.fit/api/quotes'
let quoteContainer = document.querySelector('.quote-container')
let quoteContent = document.querySelector('.quote-content')
let quoteAuthor = document.querySelector('.quote-author > span')
let loader = document.querySelector('.loader')
let quotes = []


const fetchQuotes = () => {
    loading()
    fetch(quoteApiUrl).then(response => response.json())
    .then(res=>quotes=res)
    .catch(err=>{
        console.log(err)
    }).finally(()=>{
        complete()
        getNewQuote()
    })
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
    setTimeout(() => {
        if(quotes.length){
            let random = Math.floor(Math.random() * quotes.length);
            quoteContent.innerHTML=quotes[random].text
            quoteAuthor.innerHTML=quotes[random].author
        }else{
            quoteContent.innerHTML="We could not get data from server"
            quoteAuthor.innerHTML="404"
        }
        complete()
    }, 1000);
}

const sendTweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteContent.innerHTML} - ${quoteAuthor.innerHTML}`;
  window.open(twitterUrl, '_blank');
}

fetchQuotes()