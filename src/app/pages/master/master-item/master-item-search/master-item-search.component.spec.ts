import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterItemSearchComponent } from './master-item-search.component';


describe('MasterRouteSearchComponent', () => {
  let component: MasterItemSearchComponent;
  let fixture: ComponentFixture<MasterItemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterItemSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});