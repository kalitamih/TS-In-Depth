import * as Interfaces from '../interfaces';
import { sealed, logger, writable } from '../decorator';

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
  
    assistCustomer(custName: string): void {
      console.log(`${this.name} is assisting ${custName}`);
    };

    @writable(true)
    assistFaculty() {
      console.log('Assisting faculty.');
    }
  
    @writable(false)
    teachCommunity() {
      console.log('Teaching community.');
    }
};

export { UniversityLibrarian };

