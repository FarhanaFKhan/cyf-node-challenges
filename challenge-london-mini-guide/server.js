const express = require('express');
const app = express();
const harrow = require ('./data/Harrow.json');
const heathrow = require('./data/Heathrow.json');
const startford = require('./data/Stratford.json');

// Harrow endpoint using params

app.get('/harrow/:service', function (req, res) {
    const service = req.params.service;
    switch(service){
        case "pharmacies":
            const pharmacies = harrow.pharmacies;
            if(pharmacies){
                res.json(pharmacies);
            } else{
                res.status(404).send("Not Found");
            }
        break;

        case "colleges":
            const colleges = harrow.colleges;
            if(colleges){
                res.json(colleges);
            } else{
                res.status(404).send("Not Found");
            }
            break;
        case "doctors":
            const doctors = harrow.doctors;
            if(doctors){
                res.json(doctors);
            } else{
                res.status(404).send("Not Found");
            }  
            break;
        case "hospitals":
            const hospitals = harrow.hospitals;
            if(hospitals){
                res.json(hospitals);
            } else{
                res.status(404).send("Not Found");
            }
            break;
        default:
            res.status(404).send("Not Found");
            break;    


            
    }


        
    

    if(service === 'hospitals'){
      

    }
           

    
    
    
  });


  app.get('/heathrow/pharmacies', function (req, res) {

    const pharmacies = heathrow.pharmacies;
    if(pharmacies !== undefined){
        res.json(pharmacies);

    }else{
        res.status(404).send("Not Found");
    }
    
    
  })

  app.get('/stratford/pharmacies', function (req, res) {

    const pharmacies = startford.pharmacies;
    if(pharmacies !== undefined){
        res.json(pharmacies);
    }else{
        res.status(404).send("Not Found");
    }
    
    
  })
   
  app.listen(process.env.PORT || 3000);