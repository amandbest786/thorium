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

router.post('/players/:playerName/bookings/:bookingid',function(req,res){
    let playerName = req.params.playerName;
    let bookingId = req.params.bookingid;
    let booking = req.body;
    let bn = req.body.bookingNumber;
    for(let i=0;i<players.length;i++){
        if(playerName==players[i].name){
            console.log(playerName==players[i].name)
             let x=  players[i].bookings.find(ele=>ele.bookingNumber==bookingId)
             let y=  players[i].bookings.find(ele=>ele.bookingNumber==bn)
             if ( x||y ){
                return res.send("Booking id already exists")
             }
                players[i].bookings.push(booking)
                return res.send(players)
            }
     }
    return res.send("Player does not exist")
})

module.exports = router;
