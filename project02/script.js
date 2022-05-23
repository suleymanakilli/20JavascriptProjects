const jokeAPI = 'https://v2.jokeapi.dev/joke/Programming,Dark,Pun?type=single'

// new SpeechSynthesisUtterance object
let utter = new SpeechSynthesisUtterance();
utter.lang = 'en-US';
utter.text = 'Hello World';
utter.volume = 0.5;



const tellAJoke = () => {
    fetch(jokeAPI)
        .then(response => response.json())
        .then(res => {
            utter.text = res.joke
            console.log("res.joke", res.joke)
            // speak
            window.speechSynthesis.speak(utter);
        })


}