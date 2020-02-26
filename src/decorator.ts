export function sealed(name: string) {
    return function(target: Function): void {
      console.log(`Sealing the constructor: ${name}`);
      Object.seal(target);
      Object.seal(target.prototype);
    };
};

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function() {
      console.log(`Creating new instance.`);
      console.log(target);
  
      this.age = 30;
    };
 
    newConstructor.prototype = Object.create(target.prototype);    
   
    newConstructor.prototype.printLibrarian = function() {
      console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    };
  
    return newConstructor as TFunction;
};

export function writable(isWritable: boolean) {
    return function(
      target: Object,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(`Setting ${propertyKey}.`);
      descriptor.writable = isWritable;
  
      return descriptor;
    };
};

export function timeout(ms: number = 0) {
    return function(
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      console.log(`timeout: ${target}`);
      console.log(`timeout: ${descriptor}`);

      const originalMethod = descriptor.value;
  
      descriptor.value = function(...args: any) {
        setTimeout(() => {
          originalMethod.apply(this, args);
        }, ms);
      };
  
      return descriptor;
    };
};