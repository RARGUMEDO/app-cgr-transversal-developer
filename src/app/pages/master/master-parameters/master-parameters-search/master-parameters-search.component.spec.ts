import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterParametersSearchComponent } from './master-parameters-search.component';


describe('MasterParametersSearchComponent', () => {
  let component: MasterParametersSearchComponent;
  let fixture: ComponentFixture<MasterParametersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterParametersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterParametersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});