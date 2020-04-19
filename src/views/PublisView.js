var m = require("mithril")
var Publis = require("../models/Publis")

module.exports = {
  view: function() {
    return m("div",{class: 'section'},[
             m('label', {class: 'label'},"Found:"+Publis.list.size),
             m('table', {class: 'table is-striped'}, [
             m('tr', [
                 m('th',  "action"),
                 m('th',  "Id"),
                 m('th',  "Year."),
                 m('th', "Cit."),
               ]),
               Array.from(Publis.list.values()).map(function(item) {
                return m("tr", [
                    m("td", m("button", {onclick: function(e) {
                      Publis.list.delete(item.id.value)
                     }},"remove")),
                    m("td", m("a", {href: item.id.value }, item.id.value)),
                    m("td",item.edate.value),
                    m("td", item.cit.value),
                  ])}),
              ])
            ])}}
