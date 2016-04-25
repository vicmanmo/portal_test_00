/// <reference path="../typings/browser/ambient/jquery/index.d.ts" />

import $ = require('jquery');

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


$( document).ready( function() {
  $("h1.person").html('persona');

  var user = new Student("Jane", "M.", "User");
  $("h2.greeter").html( greeter(user));
});
