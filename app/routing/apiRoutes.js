var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);

    // console.log(friends[2].name)
  });

  app.get("/api/friends/:person", function(req, res){
    const chosen = req.params.person;
    // console.log(chosen)
    // console.log(friends.length)

    for (let i = 0; i < friends.length; i++){
      console.log(friends[i].name)
      if(chosen === friends[i].name){
        return res.json(friends[i])
      }
    }
    return res.json(false);
  })

  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });

  app.post("/api/friends", function (req, res) {
    var newPerson = req.body;
    console.log(newPerson);
    friends.push(newPerson)
    res.json(true)
  })
}



 



