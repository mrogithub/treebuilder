import { Component, Input } from '@angular/core';
import { TreeNode, TreeModel, ITreeOptions } from 'angular-tree-component';

// import * as sizeof from 'object-sizeof';

@Component({
  selector: 'app-virtualscroll',
  styles: [
  ],
  template: `
  <div> Gesamtzahl Knoten {{nodeCount}} </div>
  <div style="height: 400px; width: 500px; overflow: hidden;">
    <tree-root
      #tree
      (toggleExpanded)="handleEvent($event)"
      (activate)="handleEvent($event)"
      [nodes]="nodes"
      [options]="options"
      [focused]="true"
    >
    </tree-root>
  </div>
  `
})
export class VirtualscrollComponent {
  nodes: any[];

  options: ITreeOptions = {
    nodeHeight: 23,
    useVirtualScroll: true
  };

  private level0Count = 200;
  private level1Count = 10;
  private level2Count =  5;

  private model: { "Eins": "Erster Eintrag ", "Zwei": "Zweiter Eintrag", "Drei": "Dritter Eintrag"}
  
  private nodeCount = this.level0Count * this.level1Count * this.level2Count;
  constructor() {
    this.nodes = new Array(this.level0Count).fill(null).map((item, i) => ({
      id: `${i}`,
      name: `rootDynamic${i}`,
      model: this.model,
      children: new Array(this.level1Count).fill(null).map((item, n) => ({
        id: `${i}.${n}`,
        name: `rootChildDynamic${i}.${n}`,
        model: this.model,
        children: new Array(this.level2Count).fill(null).map((item, k) => ({
          id: `${i}.${n}.${k}`,
          model: this.model,
          name: `rootChildDynamic${i}.${n}.${k}`

        }))
      }))
    }));
  
  //  console.log (`size model: ${sizeof.default(this.model)}`);

  }

  handleEvent($event){
    console.log(`Ein Event`);
  }

}