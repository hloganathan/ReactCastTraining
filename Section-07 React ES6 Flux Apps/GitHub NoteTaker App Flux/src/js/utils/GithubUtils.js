var AppConstants = require('../constants/AppConstants');
var axios = require('axios');
// axios => firing call nad returning promise 
var GithubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos";
    return axios.get(url);
  }
};

// p = call()   p.then(function(){} , function(){})
module.exports = GithubUtils;