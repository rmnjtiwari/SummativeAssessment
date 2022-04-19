const express = require('express');
const db = require('../db/conn');
const Router = express.Router();

// Get all employees
Router.get('/', (req,res) => {
  db.query('select * from employee;', (err, rows) => {
    if(!err)
      res.send(rows);
    else
      console.log(err);
  })
})

// Get a specific employee
Router.get('/:id', (req,res) => {
  db.query(`select * from employee where EmployeeID=?;`,[req.params.id], (err, rows) => {
    if(!err)
      res.send(rows);
    else
      console.log(err);
  })
})

//Create a employee
Router.post('/', (req,res) => {
  db.query(`insert into employee values (?,?,?,?);`,[req.body.id, req.body.name, req.body.code, req.body.salary], (err) => {
    if(!err)
      res.send(`Employee created succesfully`);
    else
      console.log(err);
  })
})

//Update employee
Router.put('/:id', (req,res) => {
  db.query(`update employee set Name=?, EmpCode=?, Salary=? where EmployeeID=?`,[req.body.name, req.body.code, req.body.salary, req.params.id], (err) => {
    if(!err)
      res.send(`Employee with ID: ${req.params.id} updated succesfully`);
    else
      console.log(err);
  })
})

// Delete a employee
Router.delete('/:id', (req,res) => {
  db.query(`delete from employee where EmployeeID=?;`,[req.params.id], (err, rows) => {
    if(!err)
      res.send(`Employee with ID: ${req.params.id} deleted succesfully`);
    else
      console.log(err);
  })
})

module.exports = Router;