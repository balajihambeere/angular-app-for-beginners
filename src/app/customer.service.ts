import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Customer } from "./customer.model";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {
    }

    //get customers
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('api/customers');
    }

    //get customer by id
    getCustomer(id: number): Observable<Customer> {
        //retur
        return this.http.get<Customer>('api/customers/' + id);
    }

    //add customers
    addCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>('api/customers', customer, httpOptions)
    }

    //update customers
    updateCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>('api/customers', customer, httpOptions)
    }

    deleteCustomer(id: number): Observable<Customer> {
        return this.http.delete<Customer>('api/customers/' + id, httpOptions)
    }
}