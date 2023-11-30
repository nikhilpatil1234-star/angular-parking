import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllParkedVehicles() {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/ParkingTicket/GetAllParkings'
    );
  }
  createParking(data: any) {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/ParkingTicket/AppParking',
      data
    );
  }
}
