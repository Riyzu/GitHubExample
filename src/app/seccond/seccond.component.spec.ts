import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccondComponent } from './seccond.component';

describe('SeccondComponent', () => {
  let component: SeccondComponent;
  let fixture: ComponentFixture<SeccondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
