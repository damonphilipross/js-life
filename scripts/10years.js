

export function computeInvestment(savings, startingSavings = 0) {
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
  return { five: totalFive, seven: totalSeven };
}

export function timeToInvestment(savingsPrincipal, saveRate, goal) {
  let i = 0;
  let goalPrincipal = (goal * 52) / 0.04;
  while (savingsPrincipal < goalPrincipal) {
    savingsPrincipal += saveRate;
    savingsPrincipal *= 1.05
    i++;
  }
  return i+10;
}

