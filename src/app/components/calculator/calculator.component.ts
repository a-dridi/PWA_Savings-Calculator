import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Savings } from 'src/app/savings.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  calculationForm: FormGroup;
  savingsYears: Savings[] = [];
  displayedColumns: string[] = ['year', 'savedamount'];
  savingsCalculated: boolean = false;
  constructor(private calculationFormBuild: FormBuilder) {
    this.calculationForm = this.calculationFormBuild.group({
      savingsAmount: [''],
      years: [''],
      interestPercentage: ['']
    });
  }

  ngOnInit(): void {
  }

  calculateSavingPlan(savingsAmount, interestPercentage, years) {
    let previousSaving = 1;
    let currentSaving;
    for (let yearNumber = 1; yearNumber <= years; yearNumber++) {
      currentSaving = previousSaving * (1 + (interestPercentage) / 100) + savingsAmount * (1 + (interestPercentage) / 100);
      currentSaving = Math.round((currentSaving + Number.EPSILON) * 100) / 100;
      this.savingsYears.push({ year: yearNumber, savedAmount: currentSaving});
      previousSaving = currentSaving;
    }
    this.savingsCalculated = true;
  }

}
