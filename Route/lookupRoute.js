const express=require('express')
const route=express.Router();
const controller=require('../Controller/lookupController');

//USER
route.post('/adduser',controller.adduser)
route.get('/getuser',controller.getuser)

//POST
route.post('/AddPost',controller.AddPost)
route.get('/getpost',controller.GetPost)

//COMMENT
route.post('/AddComment',controller.AddComment)
route.get('/GetComment',controller.GetComment)

// LookUp 
route.get('/Lookup',controller.lookup)

module.exports=route;