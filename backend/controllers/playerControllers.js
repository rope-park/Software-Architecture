import mongoose from "mongoose";
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async(req, res) => {
    let newPlayer = new Player(req.body);
    /*newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });*/
    const result = await newPlayer.save()
    console.log(result);
    res.json(newPlayer);
 };

 export const getPlayers = async(req, res) => {
    /*Player.find({}, (err, Player) => {
        if (err) {
            res.send(err);
        } 
        res.json(Player);
    });*/
    const result2 = await Player.find()
    res.status(200).send({
        status: 'Success',
        data: result2
    })
 };

 export const getPlayerWithID = async(req, res) => {
    const result3 = await Player.findById(req.params.PlayerId)
    res.status(200).send({
        status: 'Success',
        data: result3
    })
 };

 export const UpdatePlayer = async(req, res) => {
    const result4 = await Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, { new: true })
    res.status(200).send({
        status: 'Success',
        data: result4
    })
 };

 export const deletePlayer = async(req, res) => {
    const result5 = await Player.findByIdAndRemove({ _id: req.params.PlayerId })
    console.log(result5);
    res.json({ message: 'Successfully deleted player'});
};