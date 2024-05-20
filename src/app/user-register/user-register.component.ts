import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { UserRegisterService } from './user-register.service';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [DialogModule, InputTextModule, CalendarModule, CommonModule,
    DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent implements OnInit {
  @Input() userRegistrationDialogVisibility: boolean = false;
  public registrationForm!: FormGroup;
  public genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' }
  ];

  constructor(public userRegisterService: UserRegisterService) {
  }

  onCloseDialog() {
    this.userRegisterService.shareUserRegisterationDialogDisplayInformation(false);
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, Validators.compose([Validators.required])),
      fatherName: new FormControl(null, Validators.compose([Validators.required])),
      dob: new FormControl(null, Validators.compose([Validators.required])),
      gender: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  onSubmitUserDetails() {
    if (this.registrationForm) {
      if (this.registrationForm?.valid) {
        this.userRegisterService.addNewUserDetails(this.registrationForm?.value);
      } else {
        this.registrationForm?.markAllAsTouched();
      }
    }
  }
}
