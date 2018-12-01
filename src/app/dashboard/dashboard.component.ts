import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashService, ComplaintsWithPercent } from './dashboard.service';
import { PermissionManagementService } from '../_services/permissions.service';
import { LoaderService } from '../_services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashService],
})
export class DashboardComponent implements OnInit {
  selectedExamName = localStorage.getItem('selectedExam');
  books = [];
  standings = [];
  marks = [
    { id: 1, name: 'Total Marks', marks: 25 },
    { id: 2, name: 'Avg. Marks', marks: 15 },
    { id: 3, name: 'Marks Obtained', marks: 24 },
    { id: 4, name: 'Highest marks', marks: 25 },
    { id: 5, name: 'Lowest', marks: 12 },
  ];
  showMore = false;
  statsTitle = '';
  dashbordData: any;
  subjData: any;
  /*-----------------Bar Chart -----------------------*/

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Chapter1', 'Chapter2', 'Chapter3'];
  public barChartLabels1: string[] = ['Q1', 'Q2', 'Q3','Q4','Q5'];

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80], label: 'Obtained percentage' },
    { data: [28, 48, 40], label: 'Average percentage of class' }
  ];
  
    public barChartData1: any[] = [
    { data: [65, 59, 80,75,50], label: 'Obtained percentage' },
    { data: [28, 48, 40,60,65], label: 'Average percentage of class' }
  ];


  /*-----------------Bar end ---------------------------------*/


  /*-----------------Pie Chart--------------------------------*/
  public pieChartLabels: string[] = ['Distinction', 'First Class', 'Second Class', 'Others'];
  public pieChartData: number[] = [10, 20, 15, 6];
  public pieChartType = 'pie';
  public initialHide = false;

  /*----------------pie Ends----------------------------------*/

  constructor(private dashService: DashService,
    private loader: LoaderService,
    private permService: PermissionManagementService) {
    document.title = 'Dashboard';
    this.loader.displayLoader(true);
    this.dummyData();
    setTimeout(() => {
      this.loader.displayLoader(false);
    }, 800);
  }


  showMoreDetails(title) {
    if (title === 'chapter') {
      this.statsTitle = 'Chapter wise stats';
	  document.getElementById('statModalBtn').click();
    } else if ('question') {
      this.statsTitle = 'Question wise stats';
	  document.getElementById('statModalBtn1').click();
    }
	
    // this.showMore = true;
  }

  subjectData(sub) {
    this.initialHide = true;
    this.dashService.getSubjectDetails(sub).subscribe(res => {
      this.subjData = res;
    });
  }

  dummyData() {
    this.dashService.getDummyData().subscribe(res => {
      this.dashbordData = res;
      this.books = this.dashbordData.books;
      this.standings = this.dashbordData.standings;
      // this.pieChartLabels = this.dashbordData.pieChart.labels;
      // this.pieChartData = this.dashbordData.pieChart.numbers;
      console.log(this.pieChartData, this.pieChartLabels);
    });
  }

  /*-----------------Bar Chart---------------------------*/

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40,
      (Math.random() * 100),
      10,
      (Math.random() * 100)];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  /*-----------------Bar End-------------------------------------*/


  /*-----------------Pie Chart------------------------------------*/

  public pieChartClicked(e: any): void {
    console.log(e);
  }

  public pieChartHovered(e: any): void {
    console.log(e);
  }
  /*-----------------Pie Ends ------------------------------------*/

  ngOnInit() {
  }

}
