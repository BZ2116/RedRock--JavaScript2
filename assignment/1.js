

//循环
const sumTo1= n =>{
    let sn=0;
    for(var i=0;i<=n;i++)
    {
        sn+=i;
    }
    return sn;
}
console.log( sumTo1(6));


//递归
const  sumTo2 = n =>(n<=1)?n:(n+sumTo2(n-1));
console.log(sumTo2(6));
