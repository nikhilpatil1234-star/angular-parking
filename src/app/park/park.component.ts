import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss'],
})
export class ParkComponent implements OnInit {
  public vehicleData: any[] = [];
  public parkingObj: any = {
    license_plate: '',
    mobileNo: '',
    vehicle_type: '',
    entry_date: new Date(),
    ticket_amount: 0,
  };
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAlldata();
  }
  getAlldata() {
    this.apiService.getAllParkedVehicles().subscribe((resp: any) => {
      console.log('data', resp.data);
      let sortedData = resp.data.sort().reverse();
      this.vehicleData = sortedData;
    });
  }
  assignVehicleType(type: string) {
    this.parkingObj.vehicle_type = type;
  }
  assignTicketPrice(price: number) {
    this.parkingObj.ticket_amount = price;
  }
  createPost() {
    this.apiService.createParking(this.parkingObj).subscribe((resp: any) => {
      if (resp.result) {
        alert('parking ticket created');
        this.getAlldata();
        this.clearData();
      } else {
        alert(resp.message);
      }
    });
  }
  clearData() {
    this.parkingObj = {
      license_plate: '',
      mobileNo: '',
      vehicle_type: '',
      entry_date: new Date(),
      ticket_amount: 0,
    };
  }
}
