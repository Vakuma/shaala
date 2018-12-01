import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeService {

    getTimeStamp(d) {

        const month = d.getUTCMonth(); // months from 1-12
        const day = d.getDate();
        const year = d.getUTCFullYear();

        const timestamp = new Date(year, month, day).getTime();
        return timestamp;
    }
}
