const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const employeeRoutes = require('./routes/employee')
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());

app.use('/employee', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
})