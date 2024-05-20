import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserRegisterService } from '../user-register/user-register.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, UserRegisterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  public userRegisterationDialogDisplayDetails$?: Subscription
  public userRegistrationDialogVisibility: boolean = false;

  constructor(public userRegisterService: UserRegisterService) {
  }

  ngOnInit(): void {
    this.userRegisterationDialogDisplayDetails$ = this.userRegisterService.userRegisterationDialogDisplayDetails$.subscribe((dialogConfirmation: boolean) => {
      this.userRegistrationDialogVisibility = dialogConfirmation;
    });
  }

  openUserRegistrationDialog() {
    this.userRegistrationDialogVisibility = true;
  }

  ngOnDestroy(): void {
    if (this.userRegisterationDialogDisplayDetails$) {
      this.userRegisterationDialogDisplayDetails$.unsubscribe();
    }
  }
}
