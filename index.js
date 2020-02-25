const express = require('express');
require('dotenv').config();
const routes = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

app.get('/', (req, res) => {
	res.send('Server is on');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
