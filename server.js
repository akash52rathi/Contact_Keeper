const express = require('express')
const connectDB = require('./config/db');

const app = express()

// conect database
connectDB();

//init middle ware

app.use(express.json({ extended:false }));

const PORT = process.env.PORT || 5000


app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));

app.listen(PORT,()=>console.log('Server is running ' + PORT));
