import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterRouteSearchComponent } from './master-route-search.component';


describe('MasterRouteSearchComponent', () => {
  let component: MasterRouteSearchComponent;
  let fixture: ComponentFixture<MasterRouteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRouteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRouteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});