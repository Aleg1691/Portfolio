import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPolloLocoProjectComponent } from './el-pollo-loco-project.component';

describe('ElPolloLocoProjectComponent', () => {
  let component: ElPolloLocoProjectComponent;
  let fixture: ComponentFixture<ElPolloLocoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElPolloLocoProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElPolloLocoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
