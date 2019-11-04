
"use strict";
/*jshint esversion: 6 */

let button = document.querySelector('#start');
let MaxButton = document.getElementsByTagName('button')[0];
let MaxButton2 = document.querySelectorAll('button')[1];
let checkbox = document.querySelectorAll('#deposit-check');
let entryField = document.querySelectorAll('.additional_income-item');

let results = document.querySelectorAll('.result-total');

let BudgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let BudgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let ExpensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let AdditionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let AdditionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let IncomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let TargetMonthValue = document.getElementsByClassName('target_month-value')[0];

let SalaryAmount = document.querySelector('.salary-amount');
let IncomeTitle = document.querySelectorAll('.income-title')[1];
let IncomeAmount = document.querySelector('.income-amount');

let ExpensesTitle = document.querySelectorAll('.expenses-title')[1];
let ExpensesAmount = document.querySelector('.expenses-amount');
let ExpensesItem = document.querySelectorAll('.expenses-items');
let DepositAmount = document.querySelector('.deposit-amount');
let DepositPercent = document.querySelector('.deposit-percent');
let TargetAmount = document.querySelector('.target-amount');
let PeriodSelect = document.querySelector('.period-select');
let AdditionalExpensesItem = document.querySelector('.additional_expenses-item');


