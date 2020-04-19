// src/models/Names.js
var m = require("mithril")
const {cors,hal,haldoc} = require("./Config.js")

var Publis = {
  list: new Map(),
  members: new Set(),
  bibtex: [],
  start_year: "1900",
  end_year: "2500",
  load_bibtex: function() {
    this.list.forEach(function (value,key) {
        console.log(key)
          halurl=haldoc+key.match(/document\/(.*)$/i)[1]+"/bibtex"
          console.log(halurl);
          m.request({
              method: "GET",
              url: encodeURI(cors+halurl),
              headers: { 'Content-Type': 'text/plain; charset: utf-8;charset=UTF-8',
                "Accept": "text/*"
                },
                 extract: function(xhr) {return {status: xhr.status, body: xhr.responseText}},
              deserialize: function(data) {console.log("deser:"+data); return data},
              // withCredentials: false,
              // headers: {'Access-Control-Allow-Origin': '*'},
            })
            .then(function(result) {
              console.log("got:", result)
              Publis.bibtex.push(result.body)
            })
    })
  },
  load_publis: function() {
    query = `
    select ?id ?edate ?cit
    where {
      VALUES ?authors { <${Array.from(this.members).join('> <')}> }
      ?id <http://purl.org/dc/terms/bibliographicCitation> ?cit.
      ?id <http://purl.org/dc/terms/creator> ?o.
      ?o <http://data.archives-ouvertes.fr/schema/person> ?x.
      ?x <http://www.openarchives.org/ore/terms/isAggregatedBy> ?authors.
      ?id <http://purl.org/dc/terms/issued> ?date .
      BIND(xsd:integer(REPLACE(str(?date), "^.*([12][0-9]{3}).*$", "$1")) AS ?edate)
      FILTER NOT EXISTS {?id <http://purl.org/dc/terms/isReplacedBy> ?any}
      filter(?edate>=${this.start_year} and ?edate<=${this.end_year})
    } order by ?edate
      `;
    console.log("query:" + hal + query)
    var data={'query':query}
    m.request({
        method: "POST",
        url: encodeURI(cors + hal),
        params: data,
        // withCredentials: false,
        // headers: {'Access-Control-Allow-Origin': '*'},
      })
      .then(function(result) {
        console.log("got:", result.results.bindings)
        result.results.bindings.forEach(item => Publis.list.set(item.id.value,item))
      })
    }
  }

module.exports = Publis
