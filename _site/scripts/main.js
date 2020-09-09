import { tax } from './tax.js'
import { computeInvestment, timeToInvestment } from './10years.js'

const salaryInput = document.querySelector('input[name="salary"]');
const weeklyExpenses = document.querySelector('input[name="expenses"]');
const initSavings = document.querySelector('input[name="savings"]');
const goalHtml = document.querySelector('input[name="goal"]');
const button = document.querySelector('button');
const textyBoi = document.querySelector('.outcomes');

const retirement = (savings) => {
  const pIncome = (savings * 0.04)/52;
  return pIncome;
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
  const goal = parseInt(goalHtml.value);
  const weeklyPay = tax(salary);
  let savings = weeklyPay - expenses
  const { five, seven } = computeInvestment(savings, startingSavings);
  const passiveIncome = retirement(startingSavings);
  const slaveFiveYears = timeToInvestment(five, savings, goal)
  textyBoi.innerHTML = `
  <div class="life">
    <div>
      <h5>
        This is how much money you have left over after government taxes: ${formatter.format(weeklyPay)}
      </h5>
    </div>
    <div>
      <h5>
        This is your total savings: ${formatter.format(savings)}
      </h5>
    </div>
    <h5>
      In 10 years on this salary in an index fund getting 5% you will have: ${formatter.format(five)}
    </h5>
    <h5>
      In 10 years on this salary in an index fund getting 7% you will have: ${formatter.format(seven)}
    </h5>
    <h5>
     You can make ${formatter.format(passiveIncome)} a week passively with your current savings.
    </h5>

    <h5>
     You can make ${formatter.format(retirement(five))} a week passively after 10 years of saving and slavin on 5% consistent interest.
    </h5>

    <h5>
     You can make ${formatter.format(retirement(seven))} a week passively after 10 years of saving and slavin on 7% consistent interest.
    </h5>

    </div>
      <img src="assets/wagie.jpeg" alt="wage slave">
      <h5>
        Years until you can retire at 5% consistent interest.
      </h5>
      <h5>
        DUDE JUST WAGESLAVE FOR ANOTHER ${slaveFiveYears} YEARS LMAO
      </h5>
    `
}

button.addEventListener('click', computeOptions)


// $299,530 after 10 years on 22680
