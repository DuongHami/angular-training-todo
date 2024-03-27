import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittodopopupComponent } from './edittodopopup.component';

describe('EdittodopopupComponent', () => {
  let component: EdittodopopupComponent;
  let fixture: ComponentFixture<EdittodopopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdittodopopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdittodopopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
