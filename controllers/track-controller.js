const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Track = require('../models/track')

// const tracks = [
//   {
//     title: "Bohemian Rhapsody",
//     artist: "Queen",
//     album: "A Night at the Opera",
//     length: 355  // 5:55
//   },
//   {
//     title: "Billie Jean",
//     artist: "Michael Jackson",
//     album: "Thriller",
//     length: 294  // 4:54
//   },
//   {
//     title: "Smells Like Teen Spirit",
//     artist: "Nirvana",
//     album: "Nevermind",
//     length: 301  // 5:01
//   },
//   {
//     title: "Hotel California",
//     artist: "Eagles",
//     album: "Hotel California",
//     length: 391  // 6:31
//   },
//   {
//     title: "Imagine",
//     artist: "John Lennon",
//     album: "Imagine",
//     length: 183  // 3:03
//   }
// ];


// HTTP Method	Controller	Response	URI	Use Case
// POST	create	201	/tracks	Create a track

// GET	index	200	/tracks	List all tracks

// GET	show	200	/tracks/:id	Get a single track

// PUT	update	200	/tracks/:id	Update a track

// DELETE	delete	200	/tracks/:id	Delete a track

// POST /tracks add new tracks
router.post('/tracks', async (req,res)=>{
    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)
    } catch (error) {
        res.status(500).json({ error: 'Internal Servre Error'})
    }
})

router.get("/tracks", async (req,res)=>{
    try {
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Servre Error'})
        
    }
})



module.exports = router