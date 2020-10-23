const Task = require("../models").Task;

module.exports = {
  index: function(req,res){
    Task.findAll().then((tasks)=>{
      //res.json(tasks);
      res.render("tasks/index",{tasks: tasks});
    })
  },
  show: function(req,res){
    //res.send(req.params);
    Task.findByPk(req.params.id).then(function(task){
      //res.json(task);
      res.render("tasks/show",{task: task})
    })
  },
  edit: function(req,res){
    Task.findByPk(req.params.id).then(function(task){
      res.render("tasks/edit",{task: task})
    })
  },
  destroy: function(req,res){
    Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(contadorElementosEliminados){
      res.redirect("/tasks");
    })
  },
  create: function(req,res){
    Task.create({
      description: req.body.description
    }).then(result=>{
      res.json(result);
    }).catch(err=>{
      console.log(err);
      res.json(err);
    })
  },
  update: function(req,res){
    Task.update({description: req.body.description},{
      where: {
        id: req.params.id
      }
    }).then(function(response){
      //  res.json(response);
      res.redirect("/tasks/"+req.params.id);
    })
  },
  new: function(req,res){
    res.render("tasks/new");

  }

  //home: function(req,res){
  //  Task.findAll().then(function(tasks){
    //  res.render("tasks/index",{tasks: tasks});
    //});

};
