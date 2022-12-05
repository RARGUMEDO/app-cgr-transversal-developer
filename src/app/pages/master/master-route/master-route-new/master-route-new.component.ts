
import { ChangeDetectorRef, Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subscription } from 'rxjs';
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
    selector: 'app-master-route-new',
    templateUrl: './master-route-new.component.html',
    styleUrls: ['./master-route-new.component.scss'],
    // NOTE: For this example we are only providing current component, but probably
	  // NOTE: you will want to provide your main App Module
    providers: [
      { provide: NgbDateAdapter, useClass: CustomAdapter },
      { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    ]
  })
  export class MasterRouteNewComponent implements OnInit {
    isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoading: boolean;

    isLoadingCancel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLoadingCancel: boolean;
    model1: string;
	  model2: string;
    selectedValue: string  = "";    
    selectedValueEstado : string ="1";
    private unsubscribe: Subscription[] = [];

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
      private cdr: ChangeDetectorRef
    )  { 
      const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
      this.unsubscribe.push(loadingSubscr);

      
      const loadingCancelSubscr = this.isLoadingCancel$
      .asObservable()
      .subscribe((res) => (this.isLoadingCancel = res));
      this.unsubscribe.push(loadingCancelSubscr);
    }  

    ngOnInit(): void {  
    }
    get today() {
      return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
    }
    saveSettings() {
      this.isLoading$.next(true);
      setTimeout(() => {
        this.isLoading$.next(false);
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