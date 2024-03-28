import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetodopopupComponent } from './createtodopopup.component';

describe('CreatetodopopupComponent', () => {
  let component: CreatetodopopupComponent;
  let fixture: ComponentFixture<CreatetodopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatetodopopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatetodopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
