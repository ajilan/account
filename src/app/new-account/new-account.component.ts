import { Component, OnInit  } from '@angular/core';
import { loggingService } from '../logging.Service';
import { AccountsServices } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [loggingService]
})
export class NewAccountComponent implements OnInit {

 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
constructor(private loggingService: loggingService, private accountsService: AccountsServices) { }


  ngOnInit() {
  }
onCreateAccount(accountName: string, accountStatus: string){
// this.accountAdded.emit({
//   name: accountName,
//   status: accountStatus
// });
this.accountsService.addAccount(accountName, accountStatus);

//console.log('A server status changed, new status: ' + accountName + ' '+ accountStatus);
//this.loggingService.logStatusChange(accountStatus);
}
}
