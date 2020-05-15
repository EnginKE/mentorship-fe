import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringApplicationComponent } from './mentoring-application.component';

describe('MentoringApplicationComponent', () => {
  let component: MentoringApplicationComponent;
  let fixture: ComponentFixture<MentoringApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
