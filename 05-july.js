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

// Object used Curly Braces .

let rajnifamily = {
    name : "Santosh" ,
    age  : 30 ,
    Occupation : "Technitian" ,
    Food : "Chiken" ,
    Wife : {
         name : "Rinki" ,
         age : 25 ,
         Occupation : "House-wife" ,
         Food : "Mutton" ,
         Daughter : {
            name : "Gungun" ,
            age : 12 ,
            Occupation : "Student" ,
            Food : "Kurkure" , 
         }
    }
}
// console.log(rajnifamily)
console.log(rajnifamily.name , rajnifamily.Wife.name )
// console.log(rajnifamily.Occupation)
// console.log(rajnifamily.Wife.Food)
// console.log(rajnifamily.Wife.Daughter.name)
console.log(rajnifamily.Food , rajnifamily.Wife.Food , rajnifamily.Wife.Daughter.Food)