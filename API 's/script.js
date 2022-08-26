document.getElementById("btn").addEventListener("click",
makeRequest) ;

function makeRequest(){
    console.log("Button Clicked")
    const promiseObj = fetch('data.txt')
    console.log(promiseObj)
    promiseObj.then((res) => {
        console.log(res)
    })
}