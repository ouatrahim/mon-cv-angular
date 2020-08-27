import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresCodesComponent } from './autres-codes.component';

describe('AutresCodesComponent', () => {
  let component: AutresCodesComponent;
  let fixture: ComponentFixture<AutresCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutresCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutresCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
