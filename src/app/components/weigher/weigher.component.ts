import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-weigher',
  templateUrl: './weigher.component.html',
  styleUrls: ['./weigher.component.css']
})



export class WeigherComponent implements OnInit {

  constructor() { }

  bodyMassIndx = 1;
  result: string;
  stringForAlert: string;
  history: string[];
  options: string[];
  showHistory = false;

  ngOnInit() {
    this.history = ['Ваши предыдущие Вычисления:'];
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
    // document.querySelector("body").style.cssText = "--my-var: #000";
    return false;
  }

  submitfunc(age, height, weight) {

    this.bodyMassIndx = weight / (Math.pow(height / 100, 2));

    if (this.bodyMassIndx < 17.5) {
      this.result = 'Ваш вес Недостаточен, опасно для здоровья.';
    } else if (this.bodyMassIndx >= 17.5 && this.bodyMassIndx < 19.5) {
      this.result = 'Ваш вес Слегка снижен, неопасно для здоровья.';
    } else if (this.bodyMassIndx >= 19.5 && this.bodyMassIndx < 22.9) {
      this.result = 'Ваш вес Нормальный.';
    } else if (this.bodyMassIndx >= 22.9 && this.bodyMassIndx < 27.4) {
      this.result = 'Ваш вес Излишний.';
    } else if (this.bodyMassIndx >= 27.4 && this.bodyMassIndx < 29.9) {
      this.result = 'Ваш вес Ожирение 1 степени.';
    } else if (this.bodyMassIndx >= 29.9 && this.bodyMassIndx < 34.9) {
      this.result = 'Ваш вес Ожирение 2 степени.';
    } else if (this.bodyMassIndx >= 34.9 && this.bodyMassIndx < 39.9) {
      this.result = 'Ваш вес Ожирение 3 степени.';
    } else if (this.bodyMassIndx >= 39.9) {
      this.result = 'Нуу, это перебор братан.. Ожирение 4 степени, не меньше.';
    }

    this.stringForAlert =
    'Ваши показатели: '
    +  'Возраст: ' + age + 'лет, '
    + 'Рост: ' + height / 100 + 'м, '
    + 'Вес: ' + weight + 'кг. '
    + this.result;
    this.history.push(this.stringForAlert);

    alert(this.stringForAlert);

    // this.history = this.history + this.stringForAlert;
    return false;
  }

}

