import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzeroComponent } from './ezero.component';

describe('EzeroComponent', () => {
  let component: EzeroComponent;
  let fixture: ComponentFixture<EzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
