import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationDailogComponent } from './conformation-dailog.component';

describe('ConformationDailogComponent', () => {
  let component: ConformationDailogComponent;
  let fixture: ComponentFixture<ConformationDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformationDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformationDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
