import { ReferenceItem } from "./reference-item";
import { positiveInteger } from './../decorator';

export default class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
      super(newTitle, newYear);
    };

    private _copies: number;
    @positiveInteger
    get copies(): number {
      return this._copies;
    }
  
    set copies(value: number) {
      this._copies = value;
    }
  

    printItem(): void {
      super.printItem();
      console.log(`Edition: ${this.edition} (${this.year})`);
    };

    printCitation(): void {
      console.log(`${this.title} - ${this.year}`);
    };
};