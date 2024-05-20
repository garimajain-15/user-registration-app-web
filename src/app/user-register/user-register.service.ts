import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../user-list/user-list.component';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  public userRegisterationDialogDisplayDetails = new Subject<boolean>;
  public userRegisterationDialogDisplayDetails$ = this.userRegisterationDialogDisplayDetails.asObservable();
  public addNewUserInformation = new Subject<IUser>;
  public addNewUserInformation$ = this.addNewUserInformation.asObservable();

  constructor() { }

  shareUserRegisterationDialogDisplayInformation(isDialoagOpened: boolean) {
    this.userRegisterationDialogDisplayDetails.next(isDialoagOpened);
  }

  addNewUserDetails(userDetails: IUser) {
    if (userDetails) {
      userDetails.id = Math.random();
      this.addNewUserInformation.next(userDetails);
    }
  }
}
