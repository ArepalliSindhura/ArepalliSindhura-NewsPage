import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcenameBarComponent } from './sourcename-bar.component';

describe('SourcenameBarComponent', () => {
  let component: SourcenameBarComponent;
  let fixture: ComponentFixture<SourcenameBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcenameBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcenameBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
