'use strict';

// Получить кнопку "Рассчитать" через id
let start = document.getElementById('start');
start.disabled = true;
let cancel = document.getElementById('cancel');

// Получить кнопки“ + ”(плюс) через Tag, каждую в своей переменной.
let buttonPlusIncome = document.getElementsByTagName('button')[0];
let buttonPlusExpenses = document.getElementsByTagName('button')[1];

// получить чекбокс по id через querySelector
let checkboxForId = document.querySelector('#deposit-check');

// Получить поля для ввода возможных доходов(additional_income-item) при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

/* Получить все блоки в правой части программы 
через классы(которые имеют класс название - value, 
начиная с class="budget_day-value" и заканчивая class="target_month-value" > )*/
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];

/* Получить оставшиеся поля через querySelector 
каждый в отдельную переменную(Инпуты с левой стороны не забудьте про range)*/
let monthlyIncome = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let incomeItem = document.querySelectorAll('.income-items');
let period = document.querySelector('.period');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let depositBank = document.querySelector('.deposit-bank');


const AppData = function() {
  this.income = {};
  this.addIncome = [];
  this.incomeMonth = 0;
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function() {

  this.budget = +monthlyIncome.value;
  this.getExpenses(); 
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpensesAddIncome();
  this.getInfoDeposit();
  this.getBudget();  
  this.showChangePeriod();
  this.showChangeIncomePeriodValue();
  this.disabledInputText();
  this.changeButtonId();

  this.showResult();    
};
AppData.prototype.showResult = function() {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcSavedMoney();
};
AppData.prototype.addBlock = function(cls, itms, btn) {      
  let cloneItem = itms[0].cloneNode(true);
  cloneItem.children[0].value = '';
  cloneItem.children[1].value = '';
  itms[0].parentNode.insertBefore(cloneItem, btn);
  itms = document.querySelectorAll(cls);
  if (itms.length === 3) {
    btn.style.display = 'none';
  }
};
// онлайн изменение числа под бегунком изменения периода
AppData.prototype.showChangePeriod = function() {
  periodAmount.textContent = periodSelect.value;    
};
AppData.prototype.getExpenses = function() {
  // const _this = this;
  expensesItems.forEach(item => {    
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== ''){
      this.expenses[itemExpenses] = cashExpenses;
    }
  });
};
AppData.prototype.getIncome = function() {
  // const _this = this;
  incomeItem.forEach(item => {    
    let itemIncomeTitle = item.querySelector('.income-title').value;
    let incomeAmount = item.querySelector('.income-amount').value;

    if (itemIncomeTitle !== '' && incomeAmount !== '') {
      this.income[itemIncomeTitle] = incomeAmount;
    }
  }); 

  for (let key in this.income) {
    this.incomeMonth = +this.income[key];
  }
};
AppData.prototype.getAddExpensesAddIncome = function() {
  let addExpenses = additionalExpensesItem.value.split(',');

  addExpenses.forEach(item => {
    item = item.trim();
    if (item !== '') {
      this.addExpenses.push(item);
    }
  });

  additionalIncomeItem.forEach(item => {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      this.addIncome.push(itemValue);
    }
  });
};
// Функция возвращает сумму всех расходов за месяц
AppData.prototype.getExpensesMonth = function() {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
  return this.expensesMonth;
};
// Функция возвращает Накопления за месяц(Доходы минус расходы)
AppData.prototype.getBudget = function() {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
  return this.budgetMonth;
};
/* Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления и возвращает результат */
AppData.prototype.getTargetMonth = function() {return targetAmount.value / this.budgetMonth;};
AppData.prototype.getInfoDeposit = function() {
  if (this.deposit) {
    this.percentDeposit = depositPercent.value;
    this.moneyDeposit = depositAmount.value;
  }
};
AppData.prototype.calcSavedMoney = function() {return this.budgetMonth * periodSelect.value;};
// онлайн замена значения "Накопления за период" при изменении периода
AppData.prototype.showChangeIncomePeriodValue = function() {
  incomePeriodValue.value = this.budgetMonth * periodSelect.value;
};
// запрет на ввод информации в инпуты левого блока после нажатия на кнопку старт
AppData.prototype.disabledInputText = function() {
  for (let i = 0; i < document.querySelectorAll('.data input[type=text]').length; i++){
    if (monthlyIncome.value !== '') {
      document.querySelectorAll('.data input[type=text]')[i].setAttribute('disabled', '');
    }
  }
  depositBank.setAttribute('disabled', '');
};
// замена кнопки Расчитать на кнопку Сбросить
AppData.prototype.changeButtonId = function() {
  start = document.getElementById('start');
  cancel = document.getElementById('cancel');
  if (monthlyIncome.value !== ''){
    start.style.display = 'none';
    cancel.style.display = 'block';
  }  
};
AppData.prototype.reset = function() {
  this.income = {};
  this.addIncome = [];
  this.incomeMonth = 0;
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;

  document.querySelectorAll('.data input[type=text]').forEach(item => {
    item.removeAttribute('disabled');
  });

  document.querySelectorAll('input[type=text]').forEach(item => {
    item.value = '';
  });

  start.style.display = 'block';
  cancel.style.display = 'none';
  start.disabled = true;
  document.querySelector('#deposit-check').checked = false;
  depositBank.style.display = 'none';
  depositAmount.style.display = 'none';
  periodSelect.value = 1;
  periodAmount.textContent = periodSelect.value;
};
AppData.prototype.eventListiners = function() {
  const _this = this;
  start.addEventListener('click', function() {       
    _this.start();
    _this.disabledInputText();
    _this.changeButtonId();
  });

  monthlyIncome.addEventListener('change', function() {
    if (monthlyIncome.value !== '') {
      start.disabled = false;
    } else {
      start.disabled = true;
    }
  });

  // buttonPlusExpenses.addEventListener('click', appData.addExpensesBlock);
  buttonPlusExpenses.addEventListener('click', () => {
      appData.addBlock('.expenses-items',expensesItems,buttonPlusExpenses);
    }
  );
  // buttonPlusIncome.addEventListener('click', appData.addIncomeBlock);
  buttonPlusIncome.addEventListener('click', () => {
    appData.addBlock('.income-items',incomeItem,buttonPlusIncome);
    }
  );

  periodSelect.addEventListener('change', function() {    
    _this.showChangePeriod();
    _this.showChangeIncomePeriodValue();
  });

  cancel.addEventListener('click', function() {
    appData.reset();
  });

  checkboxForId.addEventListener('change', function() {
    if (checkboxForId.checked){
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      appData.deposit = 'true';
      depositBank.addEventListener('change', function() {
        let selectIndex = this.options[this.selectedIndex].value;
        if(selectIndex === 'other'){
          depositPercent.style.display = 'inline-block';
          depositPercent.value = '';
        }else{
          depositPercent.style.display = 'none';
          depositPercent.value = selectIndex;
        }
      });
    }else{
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositAmount.value = '';
      appData.deposit = 'false';
    }
  });
};
console.log(buttonPlusIncome);
const appData = new AppData();

appData.eventListiners();