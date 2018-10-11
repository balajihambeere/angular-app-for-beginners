//import InMemoryDbService class to access createdb API.
import { InMemoryDbService } from 'angular-in-memory-web-api';

//Create a InMemoryDataService class which implements InMemoryDbService
export class InMemoryDataService implements InMemoryDbService {
  //createdb function which returns the customers array
  createDb() {
    const customers = [
      { id: 101, firstName: 'Steve', lastName: 'Jobs', phoneNumber: '123456789', emailAddress: 'steve@gmail.com' },
      { id: 102, firstName: 'Bill', lastName: 'gates', phoneNumber: '987654321', emailAddress: 'gates@gmail.com' }];
    return { customers };
  }
}
