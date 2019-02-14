import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  @Input() account : {name: string, status: string} ;
  @Input() id : number;

  constructor() { }

  ngOnInit() {
  }

}
