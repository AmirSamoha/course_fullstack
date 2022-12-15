function print() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log(i);
      },2000 * i );
    }
  }
  
//print();

async function loop(start = 0, stop = 10, time = 2000){ //לולאה שתרוץ בין מספרין אחד אחרי השני בהפרש של שתי שניות
    for(let i = start; i < stop ;i++ ){
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(i)
            }, time);
        }).then(result => {
            console.log(result);
        })
    }
}
//console.log(loop(5,9));

async function loop2(start = 0, stop = 10, time = 2000){ 
   
    while( start < stop ){
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(start++)
            }, time);
           
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    }
}
//loop2(10,15);

const loadData = async() =>{

try {
    const url = "https://jsonplaceholder.typicode.com/posts/" ;
    const response =  await fetch(url);
    const data = await response.json();
    console.log(data);

}catch(error){
    console.log(error);
}
}
loadData();