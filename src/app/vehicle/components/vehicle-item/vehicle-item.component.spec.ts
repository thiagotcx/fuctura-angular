import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleItemComponent } from './vehicle-item.component';

describe('VehicleItemComponent', () => {
  let component: VehicleItemComponent;
  let fixture: ComponentFixture<VehicleItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleItemComponent]
    });
    fixture = TestBed.createComponent(VehicleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
