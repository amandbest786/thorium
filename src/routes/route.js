const express = require('express');
const router = express.Router();
 
let persons= [

    {
 
    name: "rishabh sarkar",
 
    age: 10,
 
    votingStatus: false
 
 },
 
 {
 
    name: "shiv kumar",
 
    age: 20,
 
    votingStatus: false
 
 },
 
 {
 
    name: "aman pandey",
 
    age: 70,
 
    votingStatus: false
 
 },
 
 {
 
    name: "satyajeet ray",
 
    age: 12,
 
    votingStatus: false
 
 },
 
 {
 
    name: "diwakar mishra",
 
    age: 40,
 
    votingStatus: false
 
 },

 {
 
    name: "manoj tiwari",
 
    age: 27,
 
    votingStatus: false
 
 },

 {
 
    name: "pankaj gupta",
 
    age: 15,
 
    votingStatus: false
 
 },

 {
 
    name: "niharika uike",
 
    age: 33,
 
    votingStatus: false
 
 },

 {
 
    name: "kamal subramanyam",
 
    age: 25,
 
    votingStatus: false
 
 },

 {
 
    name: "tilak das",
 
    age: 55,
 
    votingStatus: false
 
 },
 
 ]
router.get('/voting_eligiblity', function (req, res) {
    let finalVoters=[];
    let eligibleAge = req.query.eligibility_age
    for (let i=0;i<persons.length;i++){
        if (persons[i].age >= eligibleAge) {
         persons[i].votingStatus = true;
         finalVoters.push(persons[i])}
    }
    res.send({"eligible_voters_list" : finalVoters})
})

module.exports = router;