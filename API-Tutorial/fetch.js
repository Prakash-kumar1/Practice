// Question no:-1 =>>  What is Fetch()  in JavaScript ??
// Answer :- The fetch() method starts the process of fetching a resource from a server. 
//           The fetch() method returns a Promise that resolves to a Response object.

const URL = "https://jsonplaceholder.typicode.com/users" ;

fetch(URL)
        .then(response =>{
            console.log(response) ;
            // console.log(response.json()) ;
            return response.json() ;
        }).then(data =>{
            console.log(data);
			// document.write(data) ;

		for(let index in data){
			console.log(data[index]);

			document.write(`${data[index].name} and their userName is  ${data[index].username}  and they 
			are living in ${data[index].address.city} . <br> <br> `) ;
		}
        })
        .catch(error =>{
            console.log("inside catch");
            console.log(error);
        })

// ******************************************************************************************************************************************************************************************************88

// Fetching data from text file

fetch("fetch.txt")
         .then((res) =>{
			// console.log(res)
			return res.text() ;
		 }).then((data)=>{
			console.log(data)
			document.write(data) ;
		 }).catch(error =>{
            console.log("ierror in text file");
            console.log(error);
        })



// Basic Example-4  of Async/await by using Fetch() method
async function test(){

    console.log("I am second ranker in my class") ;
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

console.log("3 : I am Third, please wait")

    const users = await response.json() ;
    console.log(users) ;
    return users ;
}
console.log("I am going to print First")
const ans = test() ;
console.log("4 :I am Four")
console.log(ans)




