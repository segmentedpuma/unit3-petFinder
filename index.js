const express = require('express');
const app = express();

//array containing objects with dog details inside
 const pets = [
    {name: 'owen', owner: 'owener', id:1},
    {name: 'dug', owner: 'dugner', id:2},
    {name: 'cris', owner: 'crisner', id:3}

  ];



//set the port to 8080
app.listen(8080, () => { 
  console.log(`Server is running on port 8080`);
 });  


 app.get("/", (req,res) =>{
res.send("home");
 })

//create an api for the pets containing an array of objects containing the name, owner, and id of the pets
app.get("/api/v1/pets", (req,res) => {
  //display the array of objects
  res.send(pets);
})

//

//yeah im not going to lie, i literally could't psudo-code this far because i literally didn't know what to do until experimenting for like an hour
app.get("/api/v1/pets/owner", (req,res) => {
  

  const ownerName = req.query;

  const ownerlist = (pets.filter((currentPet) => {
    return currentPet.owner === ownerName.owner;
  }));
  console.log(ownerlist);
  console.log(ownerName);
  res.send(ownerlist);

  

});

app.get("/api/v1/pets/:name", (req,res) => {
  const {name} = req.params;

  res.send(pets.filter((currentPet) => {
    return currentPet.name === name;
  }));
})