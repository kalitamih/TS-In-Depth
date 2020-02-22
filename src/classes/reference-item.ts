abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'Research Dep';
  
    constructor(public title: string, protected year: number) {  
    }
  
    printItem(): void {
      console.log(`${this.title} was published in ${this.year}.`);   
      console.log(`Department: ${ReferenceItem.department}`);   
    }
  
    get publisher(): string {
      return this._publisher.toUpperCase();
    }
  
    set publisher(newPublisher: string) {
      this._publisher = newPublisher;
    }
  
    abstract printCitation(): void;
};

export { ReferenceItem };