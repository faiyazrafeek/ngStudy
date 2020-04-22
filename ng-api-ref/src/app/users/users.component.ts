import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
