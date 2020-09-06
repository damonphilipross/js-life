



function computeInvestment(savings) {
  let total = 0;
  Array(10).fill(1).forEach(() => {
    total += (total + savings) * 1.05
    return total;
  })
}

computeInvestment(22680)
