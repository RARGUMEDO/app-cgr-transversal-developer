import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterBusinessRuleSearchComponent } from './master-business-rule-search.component';


describe('MasterBusinessRuleSearchComponent', () => {
  let component: MasterBusinessRuleSearchComponent;
  let fixture: ComponentFixture<MasterBusinessRuleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBusinessRuleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBusinessRuleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});