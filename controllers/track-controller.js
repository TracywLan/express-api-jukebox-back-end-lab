const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Track = require('../models/track')


// POST	create	201	/tracks	Create a track
router.post('/', async (req,res)=>{
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'}) 
    }
})

// GET	index	200	/tracks	List all tracks
router.get("/", async (req,res)=>{
    try {
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'})
        
    }
})

// GET	show	200	/tracks/:id	Get a single track
router.get('/:id', async (req, res) => {
    try{
        const foundTrack = await Track.findById(req.params.id);
        if(!foundTrack) return res.status(404).json({ message: 'Track not found! Try again! '});
        res.status(200).json(foundTrack);
    } catch(err) {
        res.status(500).json({ err: err.message })
    }
})

// PUT	update	200	/tracks/:id	Update a track
router.put('/:id', async( req, res ) => {
    try {
        const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        if(!updatedTrack) return res.status(404).json({ message: 'Track not found! Try again! '});
        res.status(200).json(updatedTrack);
    } catch(err) {
        res.status(500).json({ err: err.message })
    }
})

// DELETE	delete	200	/tracks/:id	Delete a track

async function delete(req, res) {
    try {
        const deletedTrack = await Track.findByIdAndDelete(req.params.id);
        if (!deletedTrack) {
            return res.status(404).json({ message: 'Track not found' });
        }
        res.status(200).json(deletedTrack);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = router