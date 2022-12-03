require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConnection');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 9000;

connectDB();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routes/root'));

app.all('*', (req, res) => {
	res.status(404);
	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'views', '404.html'));
	} else if (req.accepts('json')) {
		res.json({ message: 'ничего не найдено' });
	} else {
		res.type('txt').send('ничего не найдено');
	}
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
	console.log('База данных подключена');
	app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`));
});

mongoose.connection.on('error', err => {
	logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});
