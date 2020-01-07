import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  add(n1: number, n2: number) {
  console.log(n1 + n2);

}
}
