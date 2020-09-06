

let less_tax = 0;

export const tax = (salary) => {
  if (salary > 70000) {
    less_tax = ((salary - 70000) * .33) + ((70000 - 48000) * .3) + ((48000 - 14000) * .175) + ((14000 * .105))
  }
  else if (salary > 48000) {
    less_tax = ((salary - 48000) * .3) + ((48000 - 14000) * .175) + ((14000 * .105))
  }
  else {
    less_tax = ((salary - 14000) * .175) + ((14000 * .105))
  }
  // const payable = (salary - 20020) * 0.12;
  return (salary - less_tax)
}
