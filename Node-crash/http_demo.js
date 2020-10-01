const http = require('http')

//Creating server object
http.createServer((req, res)=>{
    //Writing response
    res.write('Hello world')
    res.end()
})
.listen(5000, ()=>console.log("Sever running..."))