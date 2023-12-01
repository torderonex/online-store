import express from 'express';
import {config} from 'dotenv'
import router from './routes/router.js'
import cors from 'cors'
import errorMiddleware from './middlewares/errorHandling.js'
import sequelize from './db.js'
import { DeviceInfo, Device } from './models/models.js';
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

// let a = [{
//     deviceId: 2,
//     name: "Страна",
//     value:"Китай",
// },{
//     deviceId: 2,
//     name: "Экран",
//     value:"6.1'/2556x1179 Пикс",
// },{
//     deviceId: 2,
//     name: "Тип процессора",
//     value:"A17 Pro",
// },{
//     deviceId: 2,
//     name: "Встроенная память (ROM)",
//     value:"128 ГБ",
// },{
//     deviceId: 2,
//     name: "Оптическая стабилизация",
//     value:"Да",
// }]

// let b =   {
//     "name": "Sony Xperia 1 III",
//     "price": 69950,
//     "rating": 3.5,
//     "img": "https://ir.ozone.ru/s3/multimedia-e/c1000/6132721394.jpg",
//     "typeId": 1,
//     "brandId": 7
//   }

//  await Device.create(b);

// for (var i = 5; i < 7;i++){
//     a.forEach(async (element) => {
//         element.deviceId = i;
//         await DeviceInfo.create(element)
     
//     });
// }