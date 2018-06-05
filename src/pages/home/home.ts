import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 	CalculatorForm : FormGroup;
 	percentiel = '';
 	@ViewChild('calculatorColumn')
  	calculatorColumn:ElementRef;
  	showCalc = false;
  	showUitleg = true;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
	this.CalculatorForm = this.formBuilder.group({
        cacScore: [''],
        age: [''],
        gender: [''],
        ethnicity: ['']
      });

  }


    calculate() {
      this.percentiel = this.calculatePercentiel(this.CalculatorForm.value);
    }

    showCalculator() {
    	this.showCalc = true;
    	this.showUitleg = false;

    }

    calculatePercentiel(values) {
 	  return 9;
    }

}
 