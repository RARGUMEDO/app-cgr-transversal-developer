
import { Component, enableProdMode, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource} from '@angular/material/table';
import { Router } from "@angular/router";
import { map, Observable, startWith } from "rxjs";
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
    selector: 'app-master-route-search',
    templateUrl: './master-route-search.component.html',
    styleUrls: ['./master-route-search.component.scss']
  })
  export class MasterRouteSearchComponent implements OnInit {  
    msjAlert: string = "";
    rutaAuxiliar:  any;
    //displayedColumns: string[] = ['codigo', 'tipo', 'nombre', 'valor', 'estado', 'feciniciovig', 'fecfinvig', 'accion'];
    dataSource: rutaElement[] = [
      {cu: 'xds2dnfkafafas3243201', codigo: '01', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo', feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243202', codigo: '02', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243203', codigo: '03', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243204', codigo: '04', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243205', codigo: '05', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243206', codigo: '06', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243206', codigo: '06', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243207', codigo: '07', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '24/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243208', codigo: '08', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '23/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243209', codigo: '09', tipo: 'Servicio de listas', nombre: 'ruta 2', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig : '12/08/2022', fecfinvig: '23/11/2022'},
      {cu: 'xds2dnfkafafas3243210', codigo: '010', tipo: 'Servicio transaccionales', nombre: 'ruta 3', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243211', codigo: '011', tipo: 'Servicio transaccionales', nombre: 'ruta 3', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243212', codigo: '012', tipo: 'Servicio transaccionales', nombre: 'ruta 3', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243213', codigo: '013', tipo: 'File Server', nombre: 'ruta 3', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243214', codigo: '014', tipo: 'Reportes', nombre: 'ruta 4', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Inactivo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243215', codigo: '015', tipo: 'Servicio externos', nombre: 'ruta 4', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' },
      {cu: 'xds2dnfkafafas3243216', codigo: '016', tipo: 'Servicio externos', nombre: 'ruta 4', valor: 'http://localhost:4200/cgr-master/pages/route/search',estado: 'Activo',feciniciovig :'12/08/2022', fecfinvig: '23/11/2022' }
    ];

  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    myControl = new FormControl('');
  
    selectedValue: string  = "";    
    selectedColValue: string  = "";    
    comboSelects: comboSelect[] = [
      {value: '1', viewValue: 'File server'},
      {value: '2', viewValue: 'reportes'},
      {value: '3', viewValue: 'Servicios de listas'},
      {value: '3', viewValue: 'Servicios transaccionales'},
      {value: '3', viewValue: 'Servicios de externos'},
    ];
    comboColSelects: comboSelect[] = [
      {value: '1', viewValue: 'CODIGO'},
      {value: '2', viewValue: 'NOMBRE'},
      {value: '3', viewValue: 'VALOR'},
      {value: '3', viewValue: 'ESTADO'},
      {value: '3', viewValue: 'FECHA INICIO VIGENCIA'},
      {value: '3', viewValue: 'FECHA FIN VIGENCIA'},
    ];

    constructor(      
      private router: Router,  
      private formBuilder: FormBuilder,
      private config: NgbModalConfig, 
      private modalService: NgbModal
     ) {    
      
     }  

    ngOnInit() {
      
    }
    ngAfterViewInit() {
     // this.dataSource.paginator = this.paginator;
    }

   

    applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     //this.dataSource.filter  = filterValue.trim().toLowerCase();
  
     // if (this.dataSource.paginator) {
     //   this.dataSource.paginator.firstPage();
     // }
    }

    newRegistration()
    {         
      this.router.navigateByUrl(`/cgr-master/pages/route/new`);
    } 
    editRow(row:rutaElement)
    {       
      localStorage.setItem('sessionRouteModel', JSON.stringify(row));
      this.router.navigateByUrl(
      `/cgr-master/pages/route/update/${row.cu}`
    );
    }

    showMsjDeleteRow(row:rutaElement, content:any)
    {       
      this.msjAlert = '¿Esta seguro de eliminar el registro '+ row.codigo + '?'
      this.rutaAuxiliar = row;
      this.open(content);
    }

    open(content:any) {
      this.modalService.open(content);
    }
  
    
    deleteRow(row:rutaElement)
    {     
      this.modalService.dismissAll('Cross click');
    }
}


interface rutaElement {
  cu: string;
  codigo: string;
  tipo: string;
  nombre: string;
  valor: string;
  estado: string;
  feciniciovig: string;
  fecfinvig: string;
}


interface comboSelect {
  value: string;
  viewValue: string;
}