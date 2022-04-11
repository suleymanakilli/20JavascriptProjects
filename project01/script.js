let quoteApiUrl = 'https://type.fit/api/quotes'
let quoteContainer = document.querySelector('.quote-container')
let quoteContent = document.querySelector('.quote-content')
let quoteAuthor = document.querySelector('.quote-author > span')
let loader = document.querySelector('.loader')
let quotes = []

//fetch quotes
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

//set display according to status
const complete = () => {
    loader.hidden=true
    quoteContainer.hidden=false
}

const loading = () => {
    quoteContainer.hidden=true
    loader.hidden=false
}

//get new quote. wait for 1 second
const getNewQuote = () => {
    loading()
    setTimeout(() => {
        if(quotes.length){
            let random = Math.floor(Math.random() * quotes.length); //get random number from 0 to quote array length
            quoteContent.innerHTML=quotes[random].text
            //check if quote has author
            if(!quotes[random].author){
                quoteAuthor.innerHTML="Unknown" //unknown if it has not
            }
            else{
                quoteAuthor.innerHTML=quotes[random].author
            }
            
        }else{ // if there is no quote inform user
            quoteContent.innerHTML="We could not get data from server"
            quoteAuthor.innerHTML="404"
        }
        complete()
    }, 1000);
}

//send tweet
const sendTweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteContent.innerHTML} - ${quoteAuthor.innerHTML}`;
  window.open(twitterUrl, '_blank');
}

//fetch quotes on load
fetchQuotes()