import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptNowComponent } from './adopt-now.component';

describe('AdoptNowComponent', () => {
  let component: AdoptNowComponent;
  let fixture: ComponentFixture<AdoptNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
