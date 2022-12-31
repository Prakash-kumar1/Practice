// Question no:-1 =>  what is 2d array in javascript ??
// Answer =>  The two-dimensional array is a collection of items that share a common name and they are organized 
//             as a matrix in the form of rows and columns. The two-dimensional array is an array of arrays, 
//             so we create an array of one-dimensional array objects.
//             2D arrays, commonly known as, matrices, are used in image processing. 
//             It is also used in speech processing, in which each speech signal is an array.
//             The syntax of two-dimensional arrays is: Data_type name_of the array[rows][index];


// ###$$%%^^&&**-->>  Creating 2D array  ###$$%%^^&&**-->>

// // ###$$%%^^&&**-->>  Putting values in 2D array  ###$$%%^^&&**-->>
// let arr = [ [], [], []]
//  arr[0][0] = "Rahul" ;
//  arr[0][1] = "Lenovo" ;
//  arr[0][2] = 300 ;

//  arr[1][0] = "Sonam" ;
//  arr[1][1] = "MacBook" ;
//  arr[1][2] = 500 ;

//  arr[2][0] = "Dinesh" ;
//  arr[2][1] = "Hp" ;
//  arr[2][2] = 700 ;

//  arr[3][0] = "Kartik" ;
//  arr[3][1] = "Dell" ;
//  arr[3][2] = 900 ;


// ###$$%%^^&&**-->>  Printing values in 2D array  ###$$%%^^&&**-->>
let arr2 = [ 
                ["Rahul", "Lenovo", 300],
                ["Sonam", "MacBook", 500],
                ["Dinesh", "Hp", 700],
                ["Kartik", "Dell", 900],
          ] ;

for(let i=0; i<4; i++){
    for(let j=0; j<3; j++){
        console.log(arr2[i][j] + " ") ;
    }
}


// ###$$%%^^&&**-->>  Creating 2D array using another method like Constructor  ###$$%%^^&&**-->>

const data = new Array (
                ["Rahul", "Lenovo", 300, "Dosa"],
                ["Sonam", "MacBook", 500, "Chicken"],
                ["Dinesh", "Hp", 700, "Mutton"],
                ["Kartik", "Dell", 900, "EggRoll"],
                ["Govind", "Android", 1900, "Upma"],
                ["Rajesh", "Knight", 5400, "Litti-Chokha"],
                        )

for(let i=0; i<6; i++){
    for(let j=0; j<4; j++){
        console.log(data[i][j] + " ") ;
    }
}


 