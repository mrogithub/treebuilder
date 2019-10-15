'use strict';

import http = require("http");
import fs = require("fs");

class Student {
    fullname: string;
    constructor(public firstname, public lastname) {
        this.fullname = firstname + " " + lastname;
    }

    public sayHello(person: Person) {
        // Test
        console.log (`Hello ${this.fullname}`)
    }
    
}

interface Person {
    firstname: string;
    lastname: string;
}


export default new Student('firstName', 'lastName'); 

