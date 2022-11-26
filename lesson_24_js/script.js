// // let metrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];// דוגמא למטריצה 
// /**
//  * [0,0,0]
//  * [0,0,0]
//  * [0,0,0]
//  * 3X3 מטריצה
//  *  */

// //פונקציה לבנייה מטריצה 

// // const matrixBuild = (size) => {
// //     let metrix = [];
// //     for (row = 0; row < size; row++) {
// //         let inner_arr = [];
// //         for (col = 0; col < size; col++) {
// //             inner_arr.push(0);
// //         }
// //         metrix.push(inner_arr);
// //     }
// //     return metrix;

// // }
// //console.log(matrixBuild(3));

function matrixBuilder(size = 3, val = 0) {
    let matrix = []
    for (let row = 0; row < size; row++) {
        let inner_arr = []
        for (let col = 0; col < size; col++) {
            inner_arr.push(val);
        }
        matrix.push(inner_arr)
    }
    return matrix //בניית המטריצה
}
let m = matrixBuilder(5);
//console.log(m);



function setIndex(matrix, i, j, val) {
    matrix[i][j] = val;
    return matrix     //להשתיל ערך במקום איזהשהוא איבר
}







function printMat(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(...matrix[i]);  //מפצל את המערך לאיברים נפרדים

    }

}


function slant(mat, val = "x") {
    for (let i = 0; i < mat.length; i++) {
        setIndex(m, i, i, val); //מכניס ערכים במקום הערכים בצורה אלכסונית
    }
    return mat
}

function slant2(mat, val = "#") {
    for (let i = 0; i < mat.length; i++) {
        setIndex(m, i, m.length - 1 - i, val); // הפוכה מכניס ערכים במקום הערכים בצורה אלכסונית
    }
    return mat
}

function box(mat, val = 1) { // פונקציה שתציב ערך רק בגבולות את הערך 
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i == 0 || j == 0 || i == mat.length - 1 || j == mat.length - 1) {
                setIndex(m, i, j, val);
            }
        }

    }
    return mat;
}



// console.log(slant(m));
// console.log(slant2(m));
//console.log(box(m));

//let arrToConvert = [[1,2,3],[4,5,6],[7,8,9]];

function matrixToArry(mat) { //ממיר ממטריצה לשורה של מערך אחד
    let newArr = [];
    for (let i = 0; i < mat.length; i++) {
        newArr = newArr.concat(mat[i]);
    }
    return newArr;
}
//console.log(matrixToArry(m));

let input = [1, 1, 1, 1, 0, 1, 1, 1, 1,1,1,1]
function ArraytoMatrix(arr, size) {
    /**
     * input: [1, 1, 1, 1, 0, 1, 1, 1, 1].lengh = size**2
     * 
     * output:
     *  1 1 1
     *  1 0 1
     *  1 1 1
     * 
     * 
     */
    let matrix = [];
    // i = the number of rows
    // j = the number of colums
    for(i = 0, j = -1;i < arr.length;i++){
        if ( i % size == 0){       // שלם בודק אם האיבר מתחלק במספר 
            j++;                   //תעלה את האיבר ב1
            matrix[j] = [];        //תפתח מערך חדש
        }
        matrix[j].push(arr[i]);
    }
    return matrix;
}

console.log(ArraytoMatrix(input,4));




