// How to find a word in Paragraph? - : in array we used includes method but in string we used Flag method

let news = 'india won the world cup. India won the world cup after 2011. india is a bad country, and also India is a poor country'
let target = 'won'

// first convert into Array using split 
let newsArray = news.split(' ')

let isPresent = false ;
for(let i=0; i<newsArray.length; i++){
    if(newsArray[i] === target){
        isPresent = true ;
    }
}
console.log(isPresent)
