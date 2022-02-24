const express = require('express');
const router = express.Router();
 
let players =[ {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "bookings": []
}]

   router.post('/players', function (req, res) {
    let details = req.body.name
    let inputDetails = req.body
    let alreadyExist = false;
    for (let i = 0; i < players.length; i++) {
    if (players[i].name === details) {
    res.send("Data already exist")
    alreadyExist = true;
    }
   }
   if (alreadyExist === false) players.push( inputDetails );
   res.send(  { "players_details": players , "status": "successfully fetched data" }  )
})

router.post('/players/:playerName/booking/:bookingId', function (req, res) {
    let number = req.params.bookingId
    let name = req.params.playerName
    let inputDetails = req.body
    let playerPresent = false;
    let bookingDone = false;
    for (let i = 0; i < players.length; i++) {
    if (name === players[i].name) {
        playerPresent = true;
        for (let x=0; x<players[i].bookings.length; x++){
            if (number == players[i].bookings[x].bookingNumber){
            res.send("booking already done.")
            bookingDone = true;

        }
    }
            }
        }
        if (bookingDone == false){
            players[i].bookings.push( inputDetails )
            res.send({"detail" : players[i]})
    }
    if (playerPresent == false){
        res.send("player not being found")
        }   
})


module.exports = router;
