import { configDotenv } from 'dotenv';
import  express  from 'express';
import requestRouter from './routers/RequestRouter.js';
import volunteerRouter from './routers/VolunteerRouter.js';
import statusRouter from './routers/StatusRouter.js'
import prefernceRouter from './routers/PreferenceRouter.js'
import locationRouter from './routers/LocationRouter.js'
import mongoose from 'mongoose';


const uri = "mongodb+srv://elisheva:Ez286304@cluster0.o62vcrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`MongoDB connected to: ${uri}`))
    .catch(err => console.error('Failed to connect to MongoDB Atlas', err));


configDotenv()
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/volunteers', volunteerRouter);
app.use('/api/requests', requestRouter);
app.use('/api/statuses', statusRouter);
app.use('/api/prefernces', prefernceRouter);
app.use('/api/locations', locationRouter);
// app.use('/', (req, res) => {
//     res.send('welcome to volunteering platform! we will be happy to help you🤜🤛');
// });
app.listen(port,  () => {
    console.log(`Server running at http://localhost:${port}/`);
})
