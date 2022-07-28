let Mock = require('mockjs');
let dayjs = require('dayjs');

let arr = [
    {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
    },
    {
        date: "2016-05-04",
        name: "李小虎",
        address: "上海市普陀区金沙江路 1517 弄",
    },
    {
        date: "2016-05-01",
        name: "张小虎",
        address: "上海市普陀区金沙江路 1519 弄",
    },
    {
        date: "2016-05-03",
        name: "赵小虎",
        address: "上海市普陀区金沙江路 1516 弄",
    }
]
//请求
Mock.mock("/api/all", "get", (options) => {
    console.log('get', options);
    return {
        status: 200,
        message: "success",
        data: arr
    }
})

Mock.mock("/api/add", "post", (options) => {
    console.log('post', options);
    let body = JSON.parse(options.body)
    body.date = dayjs(new Date(body.date)).format("YYYY-MM-DD");
    console.log(body)
    arr.push(body)
    return {
        status: 200,
        message: "success",
        data: arr
    }
})


Mock.mock(/\/api\/delete\?index=\d/, "delete", (options) => {// /\/api\/delete\?index=\d/
    console.log('delete', options);
    let url = options.url
    let index = url.split("=")[1]
    console.log(index)
    let newarr = arr.splice(index,1)
    console.log(newarr)
    return {
        status: 200,
        message: "删除成功",
        data: arr
    }
})

Mock.mock("/api/update", "put", (options) => {
    console.log(59, options);
    let body = JSON.parse(options.body)
    let {date,name,address,index} = body
    arr[index].date = date
    arr[index].name = name
    arr[index].address = address
    return {
        status: 200,
        message: "success",
        data: arr
    }
})