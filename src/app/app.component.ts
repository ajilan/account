import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsServices]
})
export class AppComponent implements OnInit {
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
  accounts : {name: string, status: string}[] = [];

constructor(private AccountsService: AccountsServices) {}
  
// onAccountAdded(newAccount: {name: string, status: string}) {
//     this.accounts.push(newAccount);
//   }
//   onStatusChanged(updateInfo: {id: number, newStatus: string}){
//     this.accounts[updateInfo.id].status = updateInfo.newStatus
//   }
ngOnInit() {
  this.accounts = this.AccountsService.accounts;
}
}