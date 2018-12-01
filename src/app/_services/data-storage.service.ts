import { Injectable } from '@angular/core';

@Injectable()
// class represents the data storage process
export class DataStorageService {

  constructor() { }

  /*************************************************************************
   * Writes/Stores the object in localStorage with key
   * @function write
   * @param {string} key key for the object to store
   * @param {any} value object to be stored
   */
    public write(key: string, value: any) {
        if (value) {
            if (typeof(value) !== 'string') {
              value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        } else if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
        }
    }
 
    /*************************************************************************
   * Read/Retrives the object from sessionStorage using key
   * @function read<T>
   * @param {string} key key for the object to store
   * @return {T} return the object of type T
   */
    public read(key: string): any {
        let value: string;
 
        value = localStorage.getItem(key);
        if (value && value !== 'undefined' && value !== 'null') {
            return value;
        }
        return null;
    }
}


