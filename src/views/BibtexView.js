var m = require("mithril")
var Publis = require("../models/Publis")

module.exports = {
  view: function() {
    return m("div",[
      m("button",{
          class:'button is-link',
          onclick: function(e) {Publis.load_bibtex()}},
          "Get Bibtex"),
          m('label', {class: 'label'},"extract:"+Publis.list.size),
         Publis.bibtex.map(function(item) {
            return m("div", item)
        })
      ])
    }
  }
