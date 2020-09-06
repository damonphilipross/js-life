import { tax } from './tax.js'

const salaryInput = document.querySelector('input[name="salary"]');
const weeklyExpenses = document.querySelector('input[name="expenses"]');
const initSavings = document.querySelector('input[name="savings"]');
const button = document.querySelector('button');
const textyBoi = document.querySelector('.outcomes');

function computeInvestment(savings, startingSavings=0) {
  let totalFive = 0;
  let totalSeven = 0;
  if (startingSavings > 0) {
    totalFive = startingSavings;
    totalSeven = startingSavings;
  }
  Array(10).fill(1).forEach(() => {
    totalFive += savings
    totalFive *= 1.05
    totalSeven += savings
    totalSeven *= 1.07
  })
  return {five: totalFive, seven: totalSeven};
}


function computeOptions() {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 7,
    style: 'currency',
    currency: 'USD',
  });
  const salary = parseInt(salaryInput.value);
  const expenses = parseInt(weeklyExpenses.value);
  const startingSavings = parseInt(initSavings.value);
  const weeklyPay = tax(salary);
  let savings = weeklyPay - expenses
  const { five, seven } = computeInvestment(savings, startingSavings);
  console.log(savings);
  textyBoi.innerHTML = `
  <div class="life">
    <h5>
      This is how much money you have left over after wage slaving: ${formatter.format(weeklyPay)}
    </h5>
    <h5>
      This is your total savings: ${formatter.format(savings)}
    </h5>
    <h5>
      In 10 years on this salary in an index fund getting 5% you will have: ${formatter.format(five)}
    </h5>
    <h5>
      In 10 years on this salary in an index fund getting 7% you will have: ${formatter.format(seven)}
    </h5>
    </div>
    `
    // <h5>
    //   Years until you can retire ${formatter.format(savings)}/
    // </h5>
  }

button.addEventListener('click', computeOptions)


// $299,530 after 10 years on 22680
