import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './domain/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Prueba63_BravoPablo';
  clientes: any

  cliente: Cliente = new Cliente()

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes()
  }

  guardar(){
    this.clienteService.saveClientes(this.cliente).subscribe(data => {
      console.log(data)
      if(data.codigo ==1)
        this.ngOnInit()
      else
        alert("Error al insertar "+ data.mensaje)
      this.ngOnInit()
    })
  }
}
