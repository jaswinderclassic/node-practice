const one   =   ()  =>{
    return("I am one");
}
const two   =   ()  =>{
    setTimeout( ()  =>  {
        // console.log('adssad');
        return("I am two");
    }
    ,5000)
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>{
            resolve("I am Two");
        },3000)
    }
    )
    // console.log("I am two");
}
const three   =   ()  =>{
    return("I am three");
}

const callFunc  =  async () => 
{
    let valone     =   one();
    console.log(valone);

    let valtwo     = await  two();
    console.log(valtwo);

    let valthree     =   three();
    console.log(valthree);

}
callFunc();