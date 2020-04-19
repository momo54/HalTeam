var m = require("mithril")

var Names = require("../models/Names")
var Publis = require("../models/Publis")


module.exports = {
  view: function() {
    return  m('div',[
    m('div',{class:'subtitle'},"Found people"),
    m('table', {class:'table is-striped '},[
    m('tr', [
        m('th', {width:"20px"}, "action"),
        m('th', {width:"50px"}, "Id"),
        m('th', {width:"50px"}, "Name"),
      ]),
    Names.list.map(function(item) {
      return m('tr', [
        m("td",m("button", {onclick: function(e) {Publis.members.add(item.id.value)}},"add")),
        m("td", m("a",{href: item.id.value }, m("label",item.id.value))),
        m("td", m("label",item.name.value)),
      ])
    })])
  ])
  },
}
