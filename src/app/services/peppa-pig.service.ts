import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeppaPigService {

  constructor() { }
  getList(){
    return 'saracatunga';
  }
}
