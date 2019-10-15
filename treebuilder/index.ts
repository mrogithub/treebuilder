import Student from "./App";
import TreeBuilder from "./TreeBuilder";

class App
{
    constructor(){
        console.log('Hallo Welt');
        this.start();
    }

    public start(){
        console.log('Starting again');
        TreeBuilder.extractLevels();
    }
}

export = new App();

