/*
EXAMPLE 8 pp 407
The Telephone Numbering Plan The North American numbering plan (NANP) specifies the
format of telephone numbers in the U.S., Canada, and many other parts of North America. A
Links
telephone number in this plan consists of 10 digits, which are split into a three-digit area code, a
three-digit office code, and a four-digit station code. Because of signaling considerations, there
are certain restrictions on some of these digits. To specify the allowable format, let X denote
a digit that can take any of the values 0 through 9, let N denote a digit that can take any of
the values 2 through 9, and let Y denote a digit that must be a 0 or a 1. Two numbering plans,
which will be called the old plan, and the new plan, will be discussed. (The old plan, in use in
the 1960s, has been replaced by the new plan, but the recent rapid growth in demand for new
numbers for mobile phones and devices will eventually make even this new plan obsolete. In
Current projections are
that by 2038, it will be
necessary to add one or
more digits to North
American telephone
numbers.
this example, the letters used to represent digits follow the conventions of the North American
Numbering Plan.) As will be shown, the new plan allows the use of more numbers.
In the old plan, the formats of the area code, office code, and station code are NYX, NNX, and
XXXX, respectively, so that telephone numbers had the form NYX-NNX-XXXX. In the new plan,
the formats of these codes are NXX, NXX, and XXXX, respectively, so that telephone numbers
have the form NXX-NXX-XXXX. How many different North American telephone numbers are
possible under the old plan and under the new plan
*/

function countTotalPhoneNumbers(plan) {
  let result = 1;
  const codes = { X: 10, N: 8, Y: 1 };
  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === "X") {
      result = result * codes["X"]; // 10;
    } else if (plan[i] === "N") {
      result = result * codes["N"]; // 8;
    } else if (plan[i] === "Y") {
      result = result * codes["Y"]; //1;
    }
  }
  return result;
}

let oldPlan = "NYX-NNX-XXXX";
let newPlan = "NXX-NXX-XXXX";
console.log(countTotalPhoneNumbers(oldPlan));
console.log(countTotalPhoneNumbers(newPlan));

// console.log(oldPlan);
// for (let i = 0; i < oldPlan.length; i++) {
//   console.log(oldPlan[i]);
// }
