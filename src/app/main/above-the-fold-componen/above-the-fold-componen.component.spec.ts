import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFoldComponenComponent } from './above-the-fold-componen.component';

describe('AboveTheFoldComponenComponent', () => {
  let component: AboveTheFoldComponenComponent;
  let fixture: ComponentFixture<AboveTheFoldComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFoldComponenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboveTheFoldComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
