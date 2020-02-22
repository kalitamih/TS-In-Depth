/// <reference path="utility-functions.ts" />

const result = Utility.MaxBooksAllowed(15);
console.log(result);

import util = Utility.Fees;
const fee = util.CalculateLateFee(10);
console.log(fee);
