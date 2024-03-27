import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppoDashboardComponent } from './sppo-dashboard.component';

describe('SppoDashboardComponent', () => {
  let component: SppoDashboardComponent;
  let fixture: ComponentFixture<SppoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SppoDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SppoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
