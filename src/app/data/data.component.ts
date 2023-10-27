import { Component, OnInit } from '@angular/core';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  serviceData: any;
  errorMessage: any;
  greeting: any;

  constructor(private fakeService: FakeService) { }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData(): void {
    this.fakeService.getDataV1().subscribe(
      {
        next: data => {
          this.serviceData = data;
          console.log(data);
          this.setGreeting();
        },
        error: error => {
          this.errorMessage = error.statusText;
          console.log(error);
        },
        complete: () => console.log('completed')
      }
    );
  }

  setGreeting(): void {
    if (this.serviceData.time < 10) {
      this.greeting = 'Good morning';
    } else if (this.serviceData.time < 20) {
      this.greeting = 'Good day';
    } else {
      this.greeting = 'Good evening';
    }
  }

}
