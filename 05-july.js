                     // Array

// Defination : JavaScript मे Array एक Special Variable होता है. Javascript Arrays मे आप एक या एक से ज्यादा Value को एक ही समय मे Add कर सकते है.

// JavaScript मे Array को एक Unit या लगातार Memory Location मे Elements के Group को Represent करने के लिए उपयोग किया जाता है. प्रत्येक Elements जो आप Array मे Enter करते हो वह Zero से Start होने वाले Unique Number के साथ Array मे Stored किया जाता है.


 
// JavaScript मे Arrays का उपयोग एक Single Variable मे एक से अधिक Value को Store करने के लिये किया जाता है. Array एक ही प्रकार के Elements को एक Fixed Size मे Sequential के रूप मे Store करता है.

// उदाहरण के लिए यदि आप कुछ समय मे किसी User की Location को Track करना चाहते है तो आप एक Array मे X और y Value को Included कर सकते है Array x और y के Examples की तुलना मे अधिक है Indexed के माध्यम से आप Data या Elements को Array मे Stored कर सकते है या और आप Elements को Array से प्राप्त कर सकते है.
// Array used Square Brackets.
// All the Array are named in Pulural in terms of Semantics.

// let names = ["Vasanath" , "Shivansh" , "Ziya" , "Prakash" , "Abdul" , "Rajesh"]
// console.log(names);
// console.log(names[7]);
// console.log(names[6]);
// console.log(names[5]);
// console.log(names[4]);
// console.log(names[3]);
// console.log(names[2]);
// console.log(names[1]);
// console.log(names[17]);



// Defination of Object : Javascript Object उन Properties का एक Collection है जहां हर Properties का एक Name और एक Value होती है जो Hash, Map या अन्य Languages मे Dictionary के समान होता है. एक String का Name कोई भी String हो सकता है जिसमे खाली String भी शामिल होते है. Value कोई भी अन्य Value हो सकती है जैसे String, Boolean, Number, Null, लेकिन यह Undefined नही हो सकती.
// Object used Curly Braces .

// let rajnifamily = {
//     name : "Santosh" ,
//     age  : 30 ,
//     Occupation : "Technitian" ,
//     Food : "Chiken" ,
//     Wife : {
//          name : "Rinki" ,
//          age : 25 ,
//          Occupation : "House-wife" ,
//          Food : "Mutton" ,
//          Daughter : {
//             name : "Gungun" ,
//             age : 12 ,
//             Occupation : "Student" ,
//             Food : "Kurkure" , 
//          }
//     }
// }
// console.log(rajnifamily)
// console.log(rajnifamily.name , rajnifamily.Wife.name )
// console.log(rajnifamily.Occupation)
// console.log(rajnifamily.Wife.Food)
// console.log(rajnifamily.Wife.Daughter.name)
// console.log(rajnifamily.Food , rajnifamily.Wife.Food , rajnifamily.Wife.Daughter.Food)
//             //    OR 
// console.log(rajnifamily)
// console.log(rajnifamily['name'] , rajnifamily['Wife']['name'] )
// console.log(rajnifamily['Occupation'])
// console.log(rajnifamily['Wife']['age'])
// console.log(rajnifamily['Wife']['Daughter']['name'])
// console.log(rajnifamily['Food'] , rajnifamily['Wife']['Food'] , rajnifamily['Wife']['Daughter']['Food'])

// // Array accepts Boolean , Number ,String & Objects. 

// let names = ["Vasanath" , "Shivansh" , 12 , true ,  Wife = {
//     name : "Rinki" ,
//     age : 25 ,
//     Occupation : "House-wife" ,
//     Food : "Mutton" ,
// }  ]

// console.log(names[4]);
// console.log(names[3]);
// console.log(names[2]);
// console.log(names[1]);

// // In Array we can also change the Value.

// let peoples = ["Vasanath" , "Shivansh" , "Ziya" , "Prakash" , "Abdul" , "Rajesh"]
// console.log(peoples[4],peoples[5],peoples[3],peoples[2],peoples[0],peoples[10]);
// peoples[2] = 'Anjali'
// peoples[1] = 'Hema'
// console.log(peoples[4],peoples[1],peoples[3],peoples[2],peoples[0],peoples[100]);


// // In Array we can also put the Value at any place.

// let peoples = ["Vasanath" , "Shivansh" , "Ziya" , "Prakash" , "Abdul" , "Rajesh"]
// console.log(peoples);
//  peoples[6] = 'Mritunjay'
//  console.log(peoples);
// peoples[60] = 'Abhishek'
// console.log(peoples);


// // Array are contagious memory, it stores next to each other.
// // [10 , 20 , 30]  if the store- place of 10 is 2000 (because integer takes 4 Bytes It means 10 takes 2000 ,2001 , 2002 , 2003 .)then the place of 20 is 2004 & 30 is 2008.


// // If one changes another also changes. 
// let num = [10,20]
// let copy = num 
// console.log(num , copy)

//  copy[0] = 15 
//  num[1] = 30 
// console.log(num , copy)


// let nums = [1,2,3,true,'vasant']
// console.log(nums.length)      printing the length of Array

// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }


// let nums = [1,2,3,4,5,6,7,8,'Prakash']
// // print Ist & Last Element of Array
// console.log(nums[0] , nums[nums.length-1])
// // printing all Element of Array
// for(let i=0; i<nums.length; i++){
//         console.log(nums[i]);
//     }


// // Adding Element in Array and  Removing the Element from Array


// // In Array , we can add any Datatype like Number , String , Boolean & also a Array
// // Removing the Element from Array is called "Popping" . (removes from last never remove middle or Ist element . )

// // In nums we stores Address not values . 
// let nums = [1,2,3,4,5,6,7,8]
// console.log('intial value',nums)

// // // Adding Element in Array use ( .push )
// nums.push("Prakash");
// console.log('adding value', nums)

// // // Removing Element from Array use ( .pop )
// nums.pop()
// console.log('Removing',nums)

// console.log(nums.pop())
// console.log('Removing 2nd value',nums)

// nums.pop()
// console.log('Removing 3rd value',nums)

// // // Always Remember , If we want to remove the element from middle we can't removed . because all element stored in stack ( Last in First Out ) .so the element is in last only that Removed.it removes only step by step.

// console.log(nums.pop(2))
// // It doesn't care what parameter passed. 
// console.log('Removing 2nd value',nums)


// // In nums we store address not value so we can use "const" in place of Let 
// const nums = ['soniv' , 'prakash' , 'shivansh' , 'govind']
// nums.pop()
// nums.pop()
// nums.pop()
// nums.pop()
// console.log(nums)
// if we don't pass any parameter in push , it simply returns the length .
// nums.push(1)
// nums.push(9)
// nums.push(5)
// console.log(nums)

// // In Queue , we use .unshift for Adding  &  .shift for Removing the element  from Array

// const students = ['soniv' , 'prakash' , 'shivansh' , 'govind']

// // .unshift added element in First . 
// students.unshift('Devanshu')
// students.push('Shrivastav')
// console.log(students)

// // .shift removes Element from First 
// students.shift()
// students.shift()
// students.shift()
// students.pop()
// console.log(students)

// // xxxxxxxxxxxxxxxxxxx     How to delete an Array ??  xxxxxxxxxxxxxxxxxxx

// const friends = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

// delete friends[1] ;
// delete friends[3] ;
// delete friends[6] ;
// console.log('delete' , friends, friends[1] , friends[3] , friends[6]) ;

// // we should never-ever use delete because this is not a good Practice .
// // For Deleting every Element from Array use: 

// const friends = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

// // we are using the property (.length) not Reassigning . so, const has no Problem
// friends.length = 0
// console.log(friends.length , friends)


// const friends = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']
// friends.length = 3
// console.log(friends.length , friends)
//     //  OR 
// friends.length = 34
// console.log(friends.length , friends)
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// friends.push('Idli')
// console.log(friends.length , friends)

// friends.push('Dosa')
// friends.push('Burger')
// friends.push('Chicken')
// friends.push('Egg Roll')
// console.log(friends.length , friends)

// // xxxxxxxxxxxxxxxxxx -->>  Adding Or Replacing Element in Array  -->> xxxxxxxxxxxxxxxxxx
// // Linked List Example

// let bros = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

// // Adding Element in Middle
// splice syntax : .splice(index-value , values want to be removed , adding values)
// bros.splice( 4 , 0 , 'Sachin')
// console.log(bros)

// // / Adding same Element in two places
// bros.splice( 7 , 0 , 'Sachin')
// console.log(bros)


// // Replacing Element in Middle
// bros.splice( 4 , 2, 'Sachin')
// console.log(bros)

// // Adding  &  Replacing  Multiple Element in Middle
// bros.splice( 4 , 3, 'Sachin' , 'Tendulkar' , 'Virat' , 'Kohli')
// console.log(bros)


// // How to find which element remove : -->  By Printing splice value.
// console.log(bros.splice( 4 , 3, 'Sachin' , 'Tendulkar' , 'Virat' , 'Kohli'))


// // Using Slice property to get data 
// // slice syntax : .slice(where i want to start taking data , i want to take data before only this value)
// console.log(bros.slice( 1 , 4))
// // it will start from index value 1 and stopped at index value 3 before index value 4
// console.log(bros)

// let sisters = ['chinki' , 'pinki' , 'rinki' , 'tinki' , 'neha']
// console.log(sisters.slice(1,2))

// // slice always check the statrting value is less than ending value or not . if statrting value  is less than ending value then it give data .  if statrting value  is Greater than OR Equal to Ending value
// // (statrting value >= ending value ) then it give an empty Array . 
// console.log(sisters.slice(3,2))
// console.log(sisters.slice(3,3))        

// // if only give start value then it starts from that value and print whole data to the end.
// console.log(sisters.slice(2))    

// // all other methods affect the original Array but only slice doesn't affect original array because it  create a new Array for data . 
// let pets = ['dog' , 'cow' , 'ox' , 'pigeon' , 'buffalo']
// let slicedpets = pets.slice(1,5)
// console.log(pets,slicedpets)

// // splice method also affect original Array
// let pets = ['dog' , 'cow' , 'ox' , 'pigeon' , 'buffalo']
// console.log(pets[0],pets[1],pets[2])

// pets.splice(1,0,'Lion')
// console.log(pets[0],pets[1],pets[2],pets[3])
// // it change index value . 

// // In slice , we can only print Reverse of an Array. this is special property of slice method 
// // slice negative value method explain in Notes . check there 

// // Checking present values in Array using Loop
// let bros = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

// function brothers(bro){
//     for(let i=0; i<bros.length; i++){
//         if(bros[i] == bro) return true
//     }
//     return false
// }
// console.log(brothers('shivansh'))
// console.log(brothers('shiva'))
// console.log(brothers('hema'))
// console.log(brothers('anish'))

//     //  OR we can use .includes method 

//     console.log(bros.includes('shivansh'))
//     console.log(bros.includes('shiva'))
//     console.log(bros.includes('hema'))
//     console.log(bros.includes('anish'))   

// // if we don't want to search whole array we can put starting value in includes method

// console.log(bros.includes('shivansh' , 4))
//     console.log(bros.includes('rinki', 7))
//     console.log(bros.includes('hema' , 5))
//     console.log(bros.includes('govind', 2))   

// //Question no. - 1 : print first Repeating numbers??

// let lefthand = [1,3,4,3,2,5,7,1,4]
// let righthand = [ ]

// for(let i=0; i<lefthand.length; i++){
//     if(righthand.includes(lefthand[i])){
//     console.log(lefthand[i])
//     // if we use break then it only print the Number which repeat itself First 
//     break ;
// }else{
//     righthand.push(lefthand[i])
// }
// }


// Question no -2 : Print first non-repeating Number ??

let nums = [1,3,4,3,2,5,7,1,4]
for(let i=0; i<nums.length; i++){
let value = nums[i]
if (nums.includes(value,i+1) == false){
console.log(value);
break
}else{
nums.shift()
}
}












































































































































































































































































































































































