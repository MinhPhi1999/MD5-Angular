import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  cong() {
    // @ts-ignore
    const a = +document.getElementById('number1').value;
    // @ts-ignore
    const b = +document.getElementById('number1').value;
    // alert(a + b);
    const c = a + b;
    document.getElementById('result').innerHTML = String(c);
  }

  tru() {
    // @ts-ignore
    const a = +document.getElementById('number1').value;
    // @ts-ignore
    const b = +document.getElementById('number1').value;
    // alert(a - b);
    const c = a - b;
    document.getElementById('result').innerHTML = String(c);
  }

  nhan() {
    // @ts-ignore
    const a = +document.getElementById('number1').value;
    // @ts-ignore
    const b = +document.getElementById('number1').value;
    // alert(a * b);
    const c = a * b;
    document.getElementById('result').innerHTML = String(c);
  }

  chia() {
    // @ts-ignore
    const a = +document.getElementById('number1').value;
    // @ts-ignore
    const b = +document.getElementById('number1').value;
    // alert(a / b);
    const c = a / b;
    document.getElementById('result').innerHTML = String(c);
  }

}
