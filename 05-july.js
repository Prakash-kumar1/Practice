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
            //    OR 
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

// In Array we can also change the Value.

// let peoples = ["Vasanath" , "Shivansh" , "Ziya" , "Prakash" , "Abdul" , "Rajesh"]
// console.log(peoples[4],peoples[5],peoples[3],peoples[2],peoples[0],peoples[10]);
// peoples[2] = 'Anjali'
// peoples[1] = 'Hema'
// console.log(peoples[4],peoples[1],peoples[3],peoples[2],peoples[0],peoples[100]);


// In Array we can also put the Value at any place.

let peoples = ["Vasanath" , "Shivansh" , "Ziya" , "Prakash" , "Abdul" , "Rajesh"]
console.log(peoples);
peoples[6] = 'Mritunjay'
console.log(peoples);