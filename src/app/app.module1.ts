import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CustomerService } from './customer.service';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
