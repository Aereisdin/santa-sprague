const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.User
      .findOne({ email: req.body.email, password: req.body.password } )
      // .then(req => {console.log(req + "this is the controller")})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);
    var id = {_id: req.params.id};
    var update = {$set: {
      color: req.body.color,
      animal: req.body.animal, 
      sportTeam: req.body.sportTeam, 
      waistSize: req.body.waistSize, 
      shirtSize: req.body.shirtSize, 
      shoeSize: req.body.shoeSize, 
      hobbies: req.body.hobbies, 
      note: req.body.note, 
     }}
    db.User
      .updateOne(
         id, 
         update
         )
      .then(res => {console.log(res)})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
