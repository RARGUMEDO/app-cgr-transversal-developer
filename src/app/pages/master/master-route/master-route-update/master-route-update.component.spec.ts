import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterRouteUpdateComponent } from './master-route-update.component';


describe('MasterRouteUpdateComponent', () => {
  let component: MasterRouteUpdateComponent;
  let fixture: ComponentFixture<MasterRouteUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRouteUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRouteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});