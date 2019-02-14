import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsServices } from './account.service';
import { loggingService } from './logging.Service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsServices, loggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
