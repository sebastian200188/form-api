const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'us-cdbr-east-06.cleardb.net',
    //port: '3306',
    user: 'ba47b630ca63e5',
    password: '43f82781',
    database: 'heroku_9dab5d1d4fe89e1'
}

// mysql://ba47b630ca63e5:43f82781@us-cdbr-east-06.cleardb.net/heroku_9dab5d1d4fe89e1?reconnect=true

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})
