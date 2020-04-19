var m = require("mithril")

var Publis = require("../models/Publis")

module.exports = {
  view: function() {
    return m('div',[
    m('div',{class:'subtitle'},"Your team"),
    m('table', {class:'table is-striped'},[
    m('tr', [
        m('th', {width:"20px"}, "action"),
        m('th', {width:"50px"}, "Id"),
      ]),
      Array.from(Publis.members).map(function(item) {
      return m("tr", [
        m("td",m("button", {onclick: function(e) {Publis.members.delete(item)}},"remove")),
        m("td", m("a",{href: item }, m("label",item))),
      ])
    })])
  ])
  }
}
