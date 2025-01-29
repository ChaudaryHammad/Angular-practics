import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttComponent } from './htt.component';

describe('HttComponent', () => {
  let component: HttComponent;
  let fixture: ComponentFixture<HttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
