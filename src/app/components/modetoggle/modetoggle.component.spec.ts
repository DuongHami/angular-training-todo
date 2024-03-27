import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModetoggleComponent } from './modetoggle.component';

describe('ModetoggleComponent', () => {
  let component: ModetoggleComponent;
  let fixture: ComponentFixture<ModetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModetoggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
