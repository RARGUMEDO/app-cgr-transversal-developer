
import { ChangeDetectorRef, Component, Injectable, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
declare var localStorage: any;
declare var frmCodigo: any;
//G.G.A - FORMATO DE FECHA DD/MM/YYYYY  -INICIO 
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
 @Injectable()
 export class CustomAdapter extends NgbDateAdapter<string> {
   readonly DELIMITER = '-';
 
   fromModel(value: string | null): NgbDateStruct | null {
     if (value) {
       const date = value.split(this.DELIMITER);
       return {
         day: parseInt(date[0], 10),
         month: parseInt(date[1], 10),
         year: parseInt(date[2], 10),
       };
     }
     return null;
   }
 
   toModel(date: NgbDateStruct | null): string | null {
     return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
   }
 }
 
 /**
  * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
  */
 @Injectable()
 export class CustomDateParserFormatter extends NgbDateParserFormatter {
   readonly DELIMITER = '/';
 
   parse(value: string): NgbDateStruct | null {
     if (value) {
       const date = value.split(this.DELIMITER);
       return {
         day: parseInt(date[0], 10),
         month: parseInt(date[1], 10),
         year: parseInt(date[2], 10),
       };
     }
     return null;
   }
 
   format(date: NgbDateStruct | null): string {
     return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
   }
 }
//G.G.A - FORMATO DE FECHA DD/MM/YYYYY  -FIN 


interface comboSelect {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-master-route-update',
    templateUrl: './master-route-update.component.html',
    styleUrls: ['./master-route-update.component.scss'],
    // NOTE: For this example we are only providing current component, but probably
	  // NOTE: you will want to provide your main App Module
    providers: [
      { provide: NgbDateAdapter, useClass: CustomAdapter },
      { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    ]
  })
  export class MasterRouteUpdateComponent implements OnInit {

    isLoadingSave$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoadingSave: boolean;
    isLoadingCancel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoadingCancel: boolean;
    frmDateInicioVig: string;
	  frmDateFinVig: string;
    selectedValue: string  = "";  
    selectedValueEstado : string ="1";
    strCU : any;
    private unsubscribe: Subscription[] = [];

    
    sessionRouteModel: rutaElement;  

    comboSelects: comboSelect[] = [
      {value: '1', viewValue: 'File server'},
      {value: '2', viewValue: 'reportes'},
      {value: '3', viewValue: 'Servicios de listas'},
      {value: '3', viewValue: 'Servicios transaccionales'},
      {value: '3', viewValue: 'Servicios de externos'},
    ];  
    comboSelectsEstado: comboSelect[] = [
      {value: '1', viewValue: 'Activo'},
      {value: '0', viewValue: 'Inactivo'}
    ];
    constructor(
      private router: Router,  
      private ngbCalendar: NgbCalendar, 
      private dateAdapter: NgbDateAdapter<string> ,
      private cdr: ChangeDetectorRef,        
      private activateRoute: ActivatedRoute, 
      private formBuilder: FormBuilder
      
    )  { 
      const loadingSubscr = this.isLoadingSave$
      .asObservable()
      .subscribe((res) => (this.isLoadingSave = res));
      this.unsubscribe.push(loadingSubscr);

      const loadingCancelSubscr = this.isLoadingCancel$
      .asObservable()
      .subscribe((res) => (this.isLoadingCancel = res));
      this.unsubscribe.push(loadingCancelSubscr);
    }  

    formMasterRouteUpdate = this.formBuilder.group({ 
      frmCodigo : ['', Validators.nullValidator],
      frmNombre : ['', Validators.nullValidator],
      frmdllTipoRuta : ['', Validators.nullValidator],
      frmValorRuta : ['', Validators.nullValidator],
      frmEntrada : ['', Validators.nullValidator],
      frmSalida : ['', Validators.nullValidator],
      frmddEstado : ['', Validators.nullValidator],
    });

    ngOnInit(): void {  
      this.getCUUrl();
      this.getSessionRouteModel();
    }
    getCUUrl(): void {
      this.strCU =  this.activateRoute.snapshot.paramMap.get("cu") == null ? "" : this.activateRoute.snapshot.paramMap.get("cu") ;     
    }
    getSessionRouteModel():void {      
      this.sessionRouteModel = JSON.parse(localStorage.getItem('sessionRouteModel'));
      console.log('getSessionRouteModel');
      if(this.sessionRouteModel.cu == this.strCU){
        this.formMasterRouteUpdate.get('frmCodigo')?.setValue(this.sessionRouteModel.codigo);
        this.formMasterRouteUpdate.get('frmNombre')?.setValue(this.sessionRouteModel.nombre);
        this.formMasterRouteUpdate.get('frmValorRuta')?.setValue(this.sessionRouteModel.valor);
      }
    }

    get today() {
      return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
    }
    showFieldsForm(): void {      
    }

    saveSettings() {
      this.isLoadingSave$.next(true);
      setTimeout(() => {
        this.isLoadingSave$.next(false);
        this.cdr.detectChanges();
      }, 1500);
    }

    
    cancelSettings() {
      this.isLoadingCancel$.next(true);
      setTimeout(() => {
        this.isLoadingCancel$.next(false);
        this.cdr.detectChanges();

        this.router.navigateByUrl(`/cgr-master/pages/route/search`);

      }, 1500);
    }
}

export interface rutaElement {
  cu: string;
  codigo: string;
  tipo: string;
  nombre: string;
  valor: string;
  estado: string;
  feciniciovig: string;
  fecfinvig: string;
}
