'use strict';
var gProjects;

var gProjects = [
    {
     id: makeId(),
     name: "Sokoban",
     title: "Better push those boxes",
     desc: "lorem ipsum lorem ipsum lorem ipsum",
     url: "projs/sokoban",
     publishedAt: 1448693940000,
     labels: ["Matrixes", "keyboard events"],
    },
]

function getProjByName(projId){
    var proj = gProjects.find(function (proj){
        return projId === proj.name;
    })
    return proj;
}

function createProjects(){

}

function makeId(length=2) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++){
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}