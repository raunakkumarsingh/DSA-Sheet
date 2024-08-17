const express=require('express')
const connectToMongo=require('./db')
const cors=require('cors')

const app=express()
connectToMongo()

port=process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/mail',require('./Routes/mail'))
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/codingids',require('./Routes/codingids'))
app.use('/api/dataDSA',require('./Routes/dataDSA'))
app.use('/api/datafaraj',require('./Routes/datafaraj'))
app.use('/api/datastriver',require('./Routes/datastriver'))

app.use('/api/leetcode', require('./Routes/CodingRoutes/leetcode'))
app.use('/api/codechef', require('./Routes/CodingRoutes/codechef'))
app.use('/api/codeforces', require('./Routes/CodingRoutes/codeforces'))
app.use('/api/gfg', require('./Routes/CodingRoutes/geeksforgeeks'))


app.get('/',(req,res)=>{
   console.log("hello World");
})




app.listen(port,()=>{
    console.log(`Fraz server is listening on port http://localhost:${port}`)
})


