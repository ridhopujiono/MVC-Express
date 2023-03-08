const express = require('express');
const Model = require('../models/movieModel.js');


exports.index = async function(req, res){
   try {
        const movies = await Model.findAll();
        res.status(200).json(
            {
                data: movies
            }
        );
   } catch (error) {
        res.status(500).json(error.message)
   }
}
exports.getById = async function(req, res){
    try {
        const {id} = req.params;
         const movie = await Model.findOne({
            where: {id: id}
         });
         res.status(200).json(
             {
                 data: movie
             }
         );
    } catch (error) {
         res.status(500).json(error.message)
    }
 }
exports.store = async function(req, res){
    try {
         const movie = await Model.create({
            title: req.body.title,
            genres: req.body.genres,
            year: req.body.year
         });
         res.status(201).json(
             {
                message: "Created Successfully",
                data: movie
             }
         );
    } catch (error) {
         res.status(500).json(error.message)
    }
 }
exports.update = async function(req, res){
    try {
        const {id} = req.params;

         const movie = await Model.update({
            title: req.body.title,
            genres: req.body.genres,
            year: req.body.year
         }, {
            where: {
                id
            }
         });
         res.status(200).json(
             {
                message: "Updated Successfully"
             }
         );
    } catch (error) {
         res.status(500).json(error.message)
    }
 }

 exports.destroy = async function(req, res){
    try {
        const {id} = req.params;
         const movie = await Model.destroy({
            where: {id}
         });
         res.status(200).json(
             {
                 "message": "Movie deleted successfully"
             }
         );
    } catch (error) {
         res.status(500).json(error.message)
    }
 }