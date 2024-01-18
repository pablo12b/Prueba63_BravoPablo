import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.WS_PATH + "/clientes/list/"
    return this.http.get<any>(url)
  }

  saveClientes(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes/"
    return this.http.post<any>(url, cliente)
  }
}
