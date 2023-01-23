// Question no:-1 =>>  What is Fetch()  in JavaScript ??
// Answer :- The fetch() method starts the process of fetching a resource from a server. 
//           The fetch() method returns a Promise that resolves to a Response object.

const URL = "https://jsonplaceholder.typicode.com/posts" ;

// fetch(URL)
//         .then(response =>{
//             console.log(response) ;
//             // console.log(response.json()) ;
//             return response.json() ;
//         }).then(data =>{
//             console.log(data);
//         })
//         .catch(error =>{
//             console.log("inside catch");
//             console.log(error);
//         })


console.log("script start");
	const getData = async() => {
		var y = await "Hello World";
		console.log(y);
	}
	
	console.log(1);
	getData();
	console.log(2);

    console.log("script end");
































































































