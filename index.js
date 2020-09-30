import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './src/routes/routes';

const app = express();
const PORT = 4000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to database!'));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const router = require('./src/routes/routes');
// app.use('/', router);

// const routes = require('./src/routes/routes')
routes(app);

app.get('/', (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
