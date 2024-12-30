import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface LocalData {
  expire: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  private stringifiy(value: any) {
    return JSON.stringify(value);
  }

  private parse(value: string | null) {
    return value === null ? '' : JSON.parse(value);
  }

  public saveData(key: string, value: string) {
    let obj: LocalData = {
      expire: new Date().getTime().toString(),
      data: value,
    };
    localStorage.setItem(key, this.stringifiy(obj));
  }

  public getData(key: string) {
    return of(this.parse(localStorage.getItem(key)));
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public keyExists(key: string): boolean {
    return !(this.getData(key) === undefined);
  }

  public clearData() {
    localStorage.clear();
  }
}
