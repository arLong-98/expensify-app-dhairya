const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error');
    },5000);
});

console.log('before');

promise.then((data)=>{
        console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
