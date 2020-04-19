import m from "mithril";

var NamesView = require("./views/NamesView")
var NamesForm = require("./forms/NamesForm")
var TeamView = require("./views/TeamView")
var PeriodForm = require("./forms/PeriodForm")
var PublisView = require("./views/PublisView")
var BibtexView = require("./views/BibtexView")

var Hello = {
	    view: function() {
	    	return m("div", {class:'container'} ,[
	             m("h1", {class: "title"}, "Hal - TEAM"),

							 m("div", {class: 'box'}, [
								  m('div',{class:'media'}, [
 								 	m('div',{class:'media-left'},m('span',{class:'icon'},m('i',{class:'fas fa-home'}))),
								  m('div',{class:'media-content'},m("h2", {class: "subtitle"}, "Compose Your Team")),
								]),
									m('div',{class:'level'},
									   m('div',{class:'level-item'},m('div',m(NamesForm)))),
									m('div',{class:'tile is-ancestor'},[
									m('div',{class:'tile'},m('div', {class:'tile is-child box'}, m(NamesView))),
									m('div',{class:'tile'},m('div',{class:'tile is-child box'},m(TeamView))),
								  ]),
							  ]),
							 m("div", {class: 'box'}, [
                  m("h2", {class: "subtitle"}, "Your  Period"),
									//m(TeamView),
                  m("div", {class: 'section'}, m(PeriodForm))]),
							m("div", {class: 'box'}, [
                 m("h2", {class: "subtitle"}, "Your publications"),
                 m("div",  m(PublisView))]),
						 m("div", {class: 'box'}, [
								m("h2", {class: "subtitle"}, "Your BibteX"),
								m("div", {class: 'section'}, m(BibtexView))]),
						m('div',{class: 'footer'}) [
							m('p',"written by P. Molli")
						]
	        ])
	    }
	}

m.mount(document.body, Hello)
