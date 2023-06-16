import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/test', (request, response) => {
    return response.json({ message: 'Hello world.' });
});

app.post('/test-post', (request, response) => { 
    return response.json({ message: 'rota post test' });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);  
});