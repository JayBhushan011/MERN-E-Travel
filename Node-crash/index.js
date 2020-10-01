const http = require("http")//Importing http
const path = require("path")//Importing path module
const fs = require("fs")    //Importing the file module

//Initializing the server
const server = http.createServer((req, res)=>{
    //Building file path
    let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html':req.url)
    //Extension of the file
    let extname = path.extname(filePath)
    //Initial content type
    let contentType = 'text/html'

    //Checking the extension and then setting the content type
    switch(extname){
        case '.js': contentType:'text/javascript'
        break
        case '.css': contentType:'text/css'
        break
        case '.json': contentType:'aplications/json'
        break
        case '.png': contentType:'image/png'
        break
        case '.jpg': contentType:'image/jpg'
        break
    }
        //Read file
        fs.readFile(filePath, (err, content)=>{
            if(err){
                if(err.code=='ENONET')//Error 404
                {
                    fs.readFile(path.join(__dirname,'public','404.html'),(err, content)=>
                    {
                        res.writeHead(200, {'Content-Type':'text/html'})
                        res.end(content,'utf8')
                    })
                }
                else{
                    //Some server error
                    fs.readFile(path.join(__dirname,'public','servererror.html'),(err,content)=>
                    {
                        res.writeHead(500, {'Content-Type':'text/html'})
                        res.end(content,'utf8')
                    })
                }
            }
            //Success
            else{
                res.writeHead(200, {'Content-Type':contentType})
                res.end(content, 'utf8')
            }
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>console.log("Server is running on the port "+PORT))