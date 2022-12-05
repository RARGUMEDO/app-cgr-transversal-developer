import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterRouteNewComponent } from './master-route-new.component';


describe('MasterRouteNewComponent', () => {
  let component: MasterRouteNewComponent;
  let fixture: ComponentFixture<MasterRouteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRouteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRouteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});