var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function MaxBooksAllowed(age) {
        return (age < 12) ? 3 : 10;
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result = Utility.MaxBooksAllowed(15);
console.log(result);
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log(fee);
