const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const User = require('./models/User');
const Store = require('./models/Store');
const Rating = require('./models/Rating');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/store', require('./routes/store'));

sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
