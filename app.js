const quotes = ['Do not be assertive, but adjust to the object, and you shall find a way around or through it.', 
'We cannot change anything until we accept it. Condemnation does not liberate, it oppresses.', 
'Everything that irritates us about others can lead us to an understanding of ourselves.', 
'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.', 
"Out beyond ideas of wrongdoing, and rightdoing there is a field. I'll meet you there."];

const authors = ['Bruce Lee', 'Carl Jung', 'Rumi']

/*function inc() = {
    quotes[0], authors[0]
}*/




const btn = document.getElementById('btn');
const quote = document.querySelector('.quote');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.background = quotes[randomNumber];
    quote.textContent = quotes[randomNumber];
}); 

function getRandomNumber() {
    return Math.floor(Math.random() * quotes.length);
}