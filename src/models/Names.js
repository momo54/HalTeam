// src/models/Names.js
var m = require("mithril")

var cors_anywhere = 'http://0.0.0.0:8080/';
var hal = "http://sparql.archives-ouvertes.fr/sparql?default-graph-uri=&query=";

var Names = {
  list: [],
  current: "molli",
  check: function() {
    query = `
    select distinct ?id ?name
    where {
     ?id <http://www.openarchives.org/ore/terms/aggregates> ?x.
     ?x <http://xmlns.com/foaf/0.1/name> ?name.
     ?name bif:contains "${this.current}"
    } limit 100`;
    console.log("query:" + hal + query)
    return m.request({
        method: "GET",
        url: encodeURI(cors_anywhere + hal + query),
        // withCredentials: false,
        // headers: {'Access-Control-Allow-Origin': '*'},
      })
      .then(function(result) {
        Names.list = result.results.bindings
        console.log("got:", result.results.bindings)
      })
  }
}

module.exports = Names