let isBreadAvailable=false;
let isEggAvailable=false;
// if we use object we have to write object 10 times, so we use constructor which use to create an object

function getStuffMarket() {
  return new Promise((resolve,reject)=>{
      if(isBreadAvailable){
          resolve("heare is your bread")
      }
      if(isEggAvailable){
          resolve("here is your egg")
      }else{
          reject("nothing is available")
      }
  })  
}
let myPromise=getStuffMarket();
myPromise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// ----------------------------------------------------------------------------------------------------------------------


function append(s){
     return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.src=s;

        script.src=document.head.append(script)

        script.onload=function(){
            resolve("script is loaded")
        }
        script.onerror=function(){
            reject("script is unable to load")
        }
    })
}
// let myPromise1=append("script1.js")
// myPromise1.then((data)=>{
//     // console.log(data);
//     hello()
// }).catch((err)=>{
//     console.log(err);
// })
// append("script2.js")

// setTimeout(()=>{
//     hello();
// },2000)


// settimout=> taking time unnncessarily bcz hum khud woh time dete hai to utnahi time woh leta hai


async function outValue(){
    // let response= await append('./script1.js')
    // hello()
    // console.log(response);

    try{
     let response= await append('./script1.js')
    hello()
    console.log(response);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("gayu gayu gayu");
    }
}
outValue()

