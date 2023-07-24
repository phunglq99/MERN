import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import posts from './routers/posts.js';

const URI = 'mongodb+srv://admin:vWHQKSmyGWTYCO9f@cluster0.zlrgegs.mongodb.net/?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 5000;

//limit:'30mb': Giới hạn việc clients gửi rq lên server không vượt quá 30mb
app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

// localhost: 5000/posts
app.use('/posts', posts)

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connect to DB");
        app.listen(PORT, () => {
            console.log(`SERVER is running on port ${PORT}`);
        })
    }) .catch((err) => {
        console.log('err', err);
    });
