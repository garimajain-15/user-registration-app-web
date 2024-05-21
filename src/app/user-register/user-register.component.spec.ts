import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterService } from './user-register.service';
import { UserRegisterComponent } from './user-register.component';

describe('UserDetailsComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;
  let mockUserRegisterService: jasmine.SpyObj<UserRegisterService>;

  beforeEach(() => {
    mockUserRegisterService = jasmine.createSpyObj('UserRegisterService', ['addNewUserDetails']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, UserRegisterComponent],
      providers: [
        { provide: UserRegisterService, useValue: mockUserRegisterService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call addNewUserDetails when the form is valid', () => {
    component.registrationForm.setValue({
      name: 'John Doe',
      fatherName: 'Ram',
      gender: 'male',
      dob: '10/05/1990'
    });

    component.onSubmitUserDetails();

    expect(mockUserRegisterService.addNewUserDetails).toHaveBeenCalledWith({
      name: 'John Doe',
      fatherName: 'Ram',
      gender: 'male',
      dob: '10/05/1990'
    });
  });

  it('should mark all fields as touched when the form is invalid', () => {
    const markAllAsTouchedSpy = spyOn(component.registrationForm, 'markAllAsTouched');

    component.registrationForm.setValue({
      name: '',
      email: 'john.doe@example.com',
      password: 'password123'
    });

    component.onSubmitUserDetails();

    expect(mockUserRegisterService.addNewUserDetails).not.toHaveBeenCalled();
    expect(markAllAsTouchedSpy).toHaveBeenCalled();
  });
});
