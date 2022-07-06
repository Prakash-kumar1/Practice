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

// Array accepts Boolean , Number ,String & Objects. 

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


// Array are contagious memory, it stores next to each other.
// [10 , 20 , 30]  if the store- place of 10 is 2000 (because integer takes 4 Bytes It means 10 takes 2000 ,2001 , 2002 , 2003 .)then the place of 20 is 2004 & 30 is 2008.


// If one changes another also changes. 
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
// print Ist & Last Element of Array
// console.log(nums[0] , nums[nums.length-1])
// printing all Element of Array
// for(let i=0; i<nums.length; i++){
        // console.log(nums[i]);
    // }


// Adding Element in Array and  Removing the Element from Array


// In Array , we can add any Datatype like Number , String , Boolean & also a Array
// Removing the Element from Array is called "Popping" . (removes from last never remove middle or Ist element . )

// In nums we stores Address not values . 
// let nums = [1,2,3,4,5,6,7,8]
// console.log('intial value',nums)

// // Adding Element in Array use ( .push )
// nums.push("Prakash");
// console.log('adding value', nums)

// // Removing Element from Array use ( .pop )
// nums.pop()
// console.log('Removing',nums)

// console.log(nums.pop())
// console.log('Removing 2nd value',nums)

// nums.pop()
// console.log('Removing 3rd value',nums)

// // Always Remember , If we want to remove the element from middle we can't removed . because all element stored in stack ( Last in First Out ) .so the element is in last only that Removed.it removes only step by step.

// console.log(nums.pop(2))
// // It doesn't care what parameter passed. 
// console.log('Removing 2nd value',nums)


// In nums we store address not value so we can use "const" in place of Let 
// const nums = ['soniv' , 'prakash' , 'shivansh' , 'govind']
// nums.pop()
// nums.pop()
// nums.pop()
// nums.pop()
// console.log(nums)
// nums.push(1)
// nums.push(9)
// nums.push(5)
// console.log(nums)

// In Queue , we use .unshift for Adding  &  .shift for Removing the element  from Array

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

// xxxxxxxxxxxxxxxxxxx     How to delete an Array ??  xxxxxxxxxxxxxxxxxxx

// const friends = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

// delete friends[1] ;
// delete friends[3] ;
// delete friends[6] ;
// console.log('delete' , friends, friends[1] , friends[3] , friends[6]) ;

// we should never-ever use delete because this is not a good Practice .
// For Deleting every Element from Array use: 

const friends = ['soniv' , 'prakash' , 'shivansh' , 'govind' , 'sameer' , 'hema' , 'rinki' , 'rajesh']

friends.length = 0
console.log(friends.length , friends)
