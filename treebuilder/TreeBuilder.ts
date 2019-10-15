const treeDefinition = [
    { id: 1, level: 0, position: 1, name: 'Site', type: 'static', parent: null, options: {}, foreignKeyId: null},
    { id: 2, level: 1, position: 1, name: 'Dtmf', type: 'static', parent: null, options: {}, foreignKeyId: null},
    ]
    

class TreeBuilder{


    constructor(){
        console.log(`Building a TreeBuilder`);
    }

    public start(){
        console.log(`Treebuilder start`);
    }


    public extractLevels() {}


    public getLevels(){
 
     let level0 = treeDefinition.filter( (treeNode) => { return treeNode.level === 0 })
     let level1 = treeDefinition.filter( (treeNode) => { return treeNode.level === 1 })
 
     return [ level0, level1 ];
    }
 
   public getTreeModel(){
 
     let levels = this.getLevels();
 
     // Schleife über alle Levels und jedem Knoten seine Children zuordnen
 
     //1. Finde für alle Level 0 Knoten die jejenigen, die dessden id als parent id haben
 
     //2. Füge diese als proptery childen[] an den Level 0 Knoten 
     
     return {}
   }
}

export default new TreeBuilder();


