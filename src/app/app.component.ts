import { Component, OnInit } from '@angular/core';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular_15';
  list:any;
  loading=true;
  constructor(private service:ServicioService){

  }
  ngOnInit(): void {
    this.getScrappingSoriana();

  }

 getScrappingSoriana(){
 this.service.scrappingSoriana().subscribe((res=>{
   this.list=res;
   this.loading=false;

 }));
}
}