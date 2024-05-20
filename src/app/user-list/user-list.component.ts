import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Table } from 'primeng/table';

interface IUser {
  id: number;
  name: string;
  dob: string;
  gender: string;
  fatherName: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NavbarComponent, TableModule, ButtonModule, InputTextModule, FormsModule ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  public userList: IUser[] = [];


  ngOnInit(): void {
    
    this.userList = [
      { id: 1, name: 'Alice Smith', dob: '10/05/1990', fatherName: 'John Smith', gender: 'Female' },
      { id: 2, name: 'Bob Johnson', dob: '23/11/1988', fatherName: 'Michael Johnson', gender: 'Male' },
      { id: 3, name: 'Charlie Brown', dob: '17/04/1995', fatherName: 'Robert Brown', gender: 'Male' },
      { id: 4, name: 'Daisy Evans', dob: '30/08/1992', fatherName: 'William Evans', gender: 'Female' },
      { id: 5, name: 'Eva White', dob: '12/01/1998', fatherName: 'James White', gender: 'Female' },
      { id: 6, name: 'Frank Harris', dob: '22/06/1985', fatherName: 'David Harris', gender: 'Male' },
      { id: 7, name: 'Grace Lee', dob: '05/09/1993', fatherName: 'Charles Lee', gender: 'Female' },
      { id: 8, name: 'Hannah Walker', dob: '14/12/1997', fatherName: 'Thomas Walker', gender: 'Female' },
      { id: 9, name: 'Isaac Wright', dob: '07/03/1991', fatherName: 'Christopher Wright', gender: 'Male' },
      { id: 10, name: 'Jane Taylor', dob: '18/07/1989', fatherName: 'Daniel Taylor', gender: 'Female' },
  ];
  }
}
