var http=require("http");
var fs=require("fs");
var url=require("url");

//the logic used is switch upon the req.url

const host='localhost';
const port=5000;

const server=http.createServer((req,res)=>{
//setting the content type header to send only json
res.setHeader("Content-Type","application/json");
switch(req.url)
{
    case '/':{
        res.write("If you need json data provide /vegetables");
        res.end();
        break;
    }
    case'/vegetables':
    {
        //lets read our file and return the content
        fs.readFile('data.json',function(err,data)
        {
            if(err)
            {
                res.write("Sorry file could not be loaded");
                res.end();        
            }
            else
            {
                    res.write(data);
                    res.end();
            }
        })
        
        break;
    }
    default:
        {
            res.write("Please provide a valid url");
            res.end(Json.stringify({error:
            "Resource not found"}))

        }
}

}).listen(port,host,()=>{
    console.log("Server is running on port"+port);
})