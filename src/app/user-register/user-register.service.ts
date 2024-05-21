import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../user-list/user-list.component';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  public userRegisterationDialogDisplayDetails = new Subject<boolean>;
  public userRegisterationDialogDisplayDetails$ = this.userRegisterationDialogDisplayDetails.asObservable();
  public addNewUserInformation = new Subject<IUser>;
  public addNewUserInformation$ = this.addNewUserInformation.asObservable();

  constructor(public datePipe: DatePipe) { }

  shareUserRegisterationDialogDisplayInformation(isDialoagOpened: boolean) {
    this.userRegisterationDialogDisplayDetails.next(isDialoagOpened);
  }

  addNewUserDetails(userDetails: IUser) {
    if (userDetails) {
      userDetails.id = Math.random(); // randomly generating user Id
      const convertedDob = this.datePipe.transform(userDetails.dob, 'dd/MM/yyyy');
      if (convertedDob) {
        userDetails.dob = convertedDob;
      }
      this.addNewUserInformation.next(userDetails);
    }
  }
}
