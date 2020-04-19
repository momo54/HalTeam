var m = require("mithril")

Publis = require("../models/Publis")

module.exports = {
  view: function() {
    return m("form", {
      onsubmit: function(e) {
        e.preventDefault()
        console.log("go")
         Publis.load_publis()
      }
    }, m('div', {class:'level'},[
      m('div',{class:'level-item'}, m("label", {class:'label'},"From year: ")),
      m('div',{class:'level-item'}, m("input[type=number]", {
          class:'input is-rounded',
          min:1,
          placeholder:Publis.start_year,
          value: Publis.start_year,
        oninput: function(e) {Publis.start_year = e.target.value}})),
      m('div',{class:'level-item'},m("label", {class: 'label'},"to year: ")),
      m('div',{class:'level-item'},m("input[type=number]", {
        class:'input is-rounded',
        min:Publis.start_year,
        placeholder:Publis.end_year,
        value: Publis.end_year,
        oninput: function(e) { Publis.end_year = e.target.value }})),
      m('div',{class:'level-item'},m("button.button[type=submit]", {class:'button is-link'},"Get Publis on Hal")),
    ]))
  }
}
