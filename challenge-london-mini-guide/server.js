const express = require('express');
const app = express();
const harrow = require ('./data/Harrow.json');
const heathrow = require('./data/Heathrow.json');
const startford = require('./data/Stratford.json');

app.get('/harrow/pharmacies', function (req, res) {


    const pharmacies = harrow.pharmacies;
    if(pharmacies !== undefined){
        res.json(pharmacies);
    } else{
        res.status(404).send("Not Found");
    }
    
    
  })

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