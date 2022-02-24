const express = require('express');
const router = express.Router();
 
let arr =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": [
               {
                   "bookingNumber": "1",
                   "sportId": "669",
                   "centerId": "4632",
                   "type": "private",
                   "slot": '16286598544000',
                   "bookedOn": '31/08/2001',
                   "bookedFor": '01/11/2001'
               },
               {
                   "bookingNumber": "2",
                   "sportId": "",
                   "centerId": "",
                   "type": "private",
                   "slot": '16286518000000',
                   "bookedOn": '31/08/2001',
                   "bookedFor": '01/09/2001'
               },
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": [  {
            "bookingNumber": "3",
            "sportId": "422",
            "centerId": "7441",
            "type": "private",
            "slot": '16286598003658',
            "bookedOn": '31/08/2001',
            "bookedFor": '01/09/2011'
        }]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": [  {
            "bookingNumber": "4",
            "sportId": "774",
            "centerId": "1142",
            "type": "private",
            "slot": '16286598475500',
            "bookedOn": '31/08/2020',
            "bookedFor": '01/09/2020'
        }]
       },
       {
        "name": "aman",
        "dob": "1/2/1990",
        "gender": "male",
        "city": "cg",
        "sports": [
           "table_tennis"
        ],
          "bookings": [{
              "bookingNumber": "5",
               "sportId": "741",
               "centerId": "4555",
              "type": "private",
              "slot": "16286598705000",  
              "bookedOn": "31/08/2011",           
              "bookedFor": "02/09/2011"
             }]
      },
      {
        "name": "dev",
        "dob": "1/2/1998",
        "gender": "male",
        "city": "goa",
        "sports": [
            "tennis"
        ],
        "bookings": [
            {
                "bookingNumber": "6",
                "sportId": "444",
                "centerId": "4255",
                "type": "private",
                "slot": "16286598705400",
                "bookedOn": "31/08/2011",
                "bookedFor": "02/09/2011"
            }]
      },
      {
        "name": "sikha",
        "dob": "1/2/1988",
        "gender": "female",
        "city": "bihar",
        "sports": [
            "soccer"
        ],
        "bookings": [
            {
                "bookingNumber": "7",
                "sportId": "369",
                "centerId": "7541",
                "type": "private",
                "slot": "16286365505400",
                "bookedOn": "31/08/2015",
                "bookedFor": "02/09/2015"
            }
        ]
    }
   ]
   router.post('/players', function (req, res) {
    let details = req.body.name1.name
    let inputDetails = req.body.name1
    for (let i = 0; i < arr.length; i++) {
    if (details === arr[i].name) {
    console.log("Data already exist")
    res.send("Data already exist")
    }
    else if (i === arr.length - 1) {
    arr.push( inputDetails )
    res.send({arr})
    } 
    }  
    console.log(  { data: players , status: true }  )
    res.send(  { data: players , status: true }  )
})

module.exports = router;