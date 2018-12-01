import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class Complaints {
    complaint: string;
    count: number;
}

export class ComplaintsWithPercent {
    complaint: string;
    count: number;
    cumulativePercent: number;
}

@Injectable()
export class DashService {
    connectorName = '';
    constructor(private http: HttpClient) {
        this.connectorName = localStorage.getItem('selectedCon');
        this.connectorName = this.connectorName.toLocaleLowerCase();
        this.connectorName = this.connectorName === 'majorpay' ? 'm88pay' : this.connectorName;
    }

    transactionEasySummary(transactionSummaryInputs): Observable<any> {
        const body = JSON.stringify(transactionSummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/transactionSummary', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }
    currencyEasySummary(currencySummaryInputs): Observable<any> {
        const body = JSON.stringify(currencySummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/currencySummary', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }
    graphEasySummary(graphSummaryInputs): Observable<any> {
        const body = JSON.stringify(graphSummaryInputs);
        return this.http.post('/gateway/dashboard/' + this.connectorName + '/graphSummary', body)
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    getDummyData(): Observable<any> {
        return this.http.get('../../assets/json/pages_users_list.json')
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }

    getSubjectDetails(sub): Observable<any> {
        return this.http.get('../../assets/json/subjects/' + sub + '.json')
            .map((response: Response) => {
                const res = response;
                return res;
            });
    }


        // tslint:disable-next-line:member-ordering
        public dashbordData = {
            books: [
                { id: 1, name: 'Biology' },
                { id: 2, name: 'Physics' },
                { id: 3, name: 'Chemistry' },
                { id: 4, name: 'Kannada' },
                { id: 5, name: 'English' },
                { id: 6, name: 'Hindi' }
            ],
            marks: [
                { id: 1, name: 'Total Marks', marks: 25 },
                { id: 2, name: 'Avg. Marks', marks: 15 },
                { id: 3, name: 'Marks Obtained', marks: 24 },
                { id: 4, name: 'Highest marks', marks: 25 },
                { id: 5, name: 'Lowest', marks: 12 },
            ],
            insights: [
                { id: 1, name: 'Needs to improvement' },
                { id: 2, name: 'Good grasping power' },
                { id: 3, name: 'willing to learn' },
            ],
            pieChart: {
                labels: ['Biology', 'Physics', 'Chemistry', 'Kannada', 'English', 'Hindi'],
                data: [75, 66, 99, 100, 55, 45]
            },
            barChart: {
                name: 'Question Paper stats',
                data: [
                    { data: [65, 59, 80, 25, 56, 55, 40, 50, 40, 35], label: 'Marks in the chapter' },
                    { data: [28, 48, 40, 19, 56, 47, 35, 40, 39, 34], label: 'Obtained Marks' }
                ],
                labels: ['Chapter1', 'Chapter2', 'Chapter3', 'Chapter4',
                    'Chapter5', 'Chapter6', 'Chapter7', 'Chapter8', 'Chapter9', 'Chapter10']
            }
        };

}
