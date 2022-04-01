/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainName = [];
  let pronoun = ["the", "you"];
  let adj = ["elegant", "obtuse"];
  let noun = ["servant", "subordinate"];
  let domain = [".com", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < pronoun.length; j++) {
      for (let k = 0; k < pronoun.length; k++) {
        for (let l = 0; l < pronoun.length; l++) {
          domainName.push(" " + pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(domainName);
  document.getElementById("domain.results").innerHTML = domainName;
};
