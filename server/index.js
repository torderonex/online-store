import express from 'express';
import {config} from 'dotenv'
import router from './routes/router.js'
import cors from 'cors'
import errorMiddleware from './middlewares/errorHandling.js'
import sequelize from './db.js'
config()

const app = express();
const PORT = process.env.PORT || '5000'

app.use(cors())
app.use(express.json())
app.use('/api',router)
app.use(errorMiddleware)

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ( ) => {
            console.log(`server listening on ${PORT}`)
        })

    }catch(e){
        console.log(e)
    }
}

start()
