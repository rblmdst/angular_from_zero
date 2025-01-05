import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditPageComponent } from './employee-edit-page.component';

describe('EmployeeEditPageComponent', () => {
  let component: EmployeeEditPageComponent;
  let fixture: ComponentFixture<EmployeeEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
