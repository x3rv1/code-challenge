function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // PAYE based on 2025 brackets
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
    payee = grossSalary * 0.3;
  } else if (grossSalary <= 800000) {
    payee = grossSalary * 0.325;
  } else {
    payee = grossSalary * 0.35;
  }

  // NHIF (now SHIF): 2.75% of gross
  const nhifDeduction = grossSalary * 0.0275;

  // NSSF: 6% of pensionable pay (simplified as basic salary)
  const nssfDeduction = basicSalary * 0.06;

  const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

  return {
    grossSalary,
    payee,
    nhifDeduction,
    nssfDeduction,
    netSalary,
  };
}
