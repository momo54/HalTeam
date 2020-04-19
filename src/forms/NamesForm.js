var m = require("mithril")

var Names = require("../models/Names")

module.exports = {
  view: function() {
    return m("form", {
      onsubmit: function(e) {
        e.preventDefault()
        Names.check()
      }
    }, m('div', {class:'field has-addons'},[
      m("input[type=text]", {
        class:'control',
        placeholder: 'name',
        oninput: function(e) {
          Names.current = e.target.value
        },
        value: Names.current
      }),
      m("button[type=submit]", {class:'button is-link'}, "Find"),
    ]))
  }
}
