let Mock = require('mockjs');
// /aa 拦截
let arr = ["Z","x","c"]
// Mock.mock("/api/aa",'get',(options)=>{
//     console.log(options) //{url:"/api/aa",type:"get",body:null}
//     return arr
// })

Mock.mock(/\/api\/aa/,'get',(options)=>{
    console.log('正则',options) //{url:"/api/aa",type:"get",body:null}
    return arr
})

Mock.mock("/api/ab/","post",(options)=>{
    console.log('post',options);
    return {
        status:200,
        message:"success",
        data:arr
    }
})