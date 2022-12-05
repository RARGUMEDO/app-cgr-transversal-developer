import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterListSearchComponent } from './master-list-search.component';


describe('MasterListSearchComponent', () => {
  let component: MasterListSearchComponent;
  let fixture: ComponentFixture<MasterListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});