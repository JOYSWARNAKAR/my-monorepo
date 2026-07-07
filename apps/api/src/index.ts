import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/myapi', (req, res) => {
    res.json({ message: 'Hello from my API!' });   

});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

    
});