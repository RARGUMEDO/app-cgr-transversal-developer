import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterTemplateSearchComponent } from './master-template-search.component';


describe('MasterTemplateSearchComponent', () => {
  let component: MasterTemplateSearchComponent;
  let fixture: ComponentFixture<MasterTemplateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTemplateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTemplateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});