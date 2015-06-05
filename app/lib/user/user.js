var mongoose = require('mongoose');
var user = {};

mongoose.connect('mongodb://fredrb:1234@ds031882.mongolab.com:31882/rest-api');
var userModel = require('./model/userModel.js');

user.all = function(req, res){
    userModel.find(function(err, docs){
        if(err) res.send(err);
        res.json(docs);
    });
};

user.search = function(req, res){
    var query = {
        'name' : new RegExp(req.params.query, 'i')
    };
    userModel.find(query, function(err, docs){
        if(err) res.send(err);
        res.json(docs);
    });
};

user.add = function(req, res){
    var _user = new userModel({
        name : req.body.name
    });
    _user.save(function(err, data){
        if(err) res.send(err);
        res.json({
            "status" : "user saved",
            "data" : data
        });
    });
};

user.delete = function(req, res){
    var query = {
        'name' : req.params.query
    };
    userModel.find(query).remove(function(err, data){
        if(err) res.end(err);
        res.json({
            "status" : "user deleted",
            "data" : data
        });
    });
};

user.update = function(req, res){
    var query = {
        'name' : req.params.query
    };
    userModel.findOne(query, function(err, doc){
        doc.name = req.body.name;
        doc.save(function(err, data){
            if(err) res.end(err);
            res.json({
                "status" : "user updated",
                "data" : data
            });
        });
    });
};

module.exports = user;
