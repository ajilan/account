import { Component, OnInit, Input  } from '@angular/core';
import { loggingService } from '../logging.Service';
import { AccountsServices } from '../account.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [loggingService]
})
export class AccountsComponent implements OnInit {
  @Input() account : {name: string, status: string} ;
  @Input() id : number;
 // @Output() statusChanged = new EventEmitter <{id: number, newStatus: string}>();
  constructor(private loggingService: loggingService, private acccoutsServices: AccountsServices) { }

  ngOnInit() {
  }
onSetTo(status: string){
// this.statusChanged.emit({
//   id: this.id, 
//   newStatus: status
// });
this.acccoutsServices.updateStatus(this.id, status)
//console.log('A server status changed, new status: ' + status);
this.loggingService.logStatusChange(status)
}
}
