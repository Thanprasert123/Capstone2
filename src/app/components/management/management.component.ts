import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent implements OnInit {
  myDate: any;
  o_list: any;
  myFunc() {
    this.o_list = this.myDate;
    let index = this.list2.indexOf(this.myDate);
    this.o_list = this.list[index];

    console.log(typeof this.myDate);
    console.log(this.myDate); //YY-MM-DD

    //  this.myDate = this.list[this.myDate];

    // this.o_list = this.list[this.myDate];
  }
  public list = [
    231.6362613, 606.3174797, 827.5421212, 1010.33266, 875.9210317, 584.8924603,
    810.8059621, 871.4549123, 952.505117, 1026.414642, 1105.42044, 848.7695473,
    676.2536325, 769.4833333, 804.547549, 759.6120915, 655.9761438, 835.3244898,
    599.7585271, 302.9600877, 605.1625, 797.0039474, 823.2986254, 830.7819209,
    951.4147569, 823.4803797, 402.469697, 505.4854885, 636.3647766, 753.5495192,
    457.2054924, 451.6098039,
  ];

  public list2 = [
    `2021-05-01`,
    `2021-05-02`,
    `2021-05-03`,
    `2021-05-04`,
    `2021-05-05`,
    `2021-05-06`,
    `2021-05-07`,
    `2021-05-08`,
    `2021-05-09`,
    `2021-05-10`,
    `2021-05-11`,
    `2021-05-12`,
    `2021-05-13`,
    `2021-05-14`,
    `2021-05-15`,
    `2021-05-16`,
    `2021-05-17`,
    `2021-05-18`,
    `2021-05-19`,
    `2021-05-20`,
    `2021-05-21`,
    `2021-05-22`,
    `2021-05-23`,
    `2021-05-24`,
    `2021-05-25`,
    `2021-05-26`,
    `2021-05-27`,
    `2021-05-28`,
    `2021-05-29`,
    `2021-05-30`,
    `2021-05-31`,
    `2021-06-01`,
  ];

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: this.list.slice(0, 31), label: 'My First dataset' },
  ];

  public chartLabels: Array<any> = [...Array(this.list.length - 1).keys()];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  constructor() {}

  ngOnInit(): void {}
}

//       public list = [
//               231.6362613,
//               606.3174797,
//               827.5421212,
//               1010.33266,
//               875.9210317,
//               584.8924603,
//               810.8059621,
//               871.4549123,
//               952.505117,
//               1026.414642,
//               1105.42044,
//               848.7695473,
//               676.2536325,
//               769.4833333,
//               804.547549,
//               759.6120915,
//               655.9761438,
//               835.3244898,
//               599.7585271,
//               302.9600877,
//               605.1625,
//               797.0039474,
//               823.2986254,
//               830.7819209,
//               951.4147569,
//               823.4803797,
//               402.469697,
//               505.4854885,
//               636.3647766,
//               753.5495192,
//               457.2054924,
//               451.6098039
// ];

// public list2 = [
//                  `1-Mar`,
//                  `2-Mar`,
//                  `3-Mar`,
//                  `4-Mar`,
//                  `5-Mar`,
//                  `6-Mar`,
//                  `7-Mar`,
//                  `8-Mar`,
//                  `9-Mar`,
//                  `10-Mar`,
//                  `11-Mar`,
//                  `12-Mar`,
//                  `13-Mar`,
//                  `14-Mar`,
//                  `15-Mar`,
//                  `16-Mar`,
//                  `17-Mar`,
//                  `18-Mar`,
//                  `19-Mar`,
//                  `20-Mar`,
//                  `21-Mar`,
//                  `22-Mar`,
//                  `23-Mar`,
//                  `24-Mar`,
//                  `25-Mar`,
//                  `26-Mar`,
//                  `27-Mar`,
//                  `28-Mar`,
//                  `29-Mar`,
//                  `30-Mar`,
//                  `31-Mar`,
//                  `1-Apr`

// ];

let list3 = [{ value: `2021-05-01`, viewvalue: 200 }];
