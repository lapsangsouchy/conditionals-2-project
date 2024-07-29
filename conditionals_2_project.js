/* Part 1 - Truth Table Mania */
// false
// true
// true
// false

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - What's My Grade? */
let gradeInput = Number(process.argv[2]);

// Using !gradeInput will result as true for this first conditional.
// Use gradeInput == undefined to make sure your last check (non-numeric-data check) functions
if (gradeInput == undefined) {
  console.log('Empty response...');
} else if (gradeInput < 0 || gradeInput > 100) {
  console.log('Invalid input - Score out of range...');
} else if (gradeInput >= 90 && gradeInput <= 100) {
  console.log('Grade: A - Congrats!!! Keep it up!');
} else if (gradeInput >= 80 && gradeInput < 90) {
  // Note: Weirdly, once you've reached 15 "9"s in the decimal place, JavaScript will round it up
  //       If your student says that this edge case doesn't work, let them know it will most likely work
  //       with less 9's in the decimal place
  console.log('Grade: B - Good work. Keep at it.');
} else if (gradeInput >= 70 && gradeInput < 80) {
  console.log('Grade: C - Please try harder');
} else if (gradeInput >= 60 && gradeInput < 70) {
  console.log('Grade: D - Please try harder');
} else if (gradeInput >= 0 && gradeInput < 60) {
  console.log('Grade: F - Come see me :(');
} else {
  console.log('Invalid input - please enter a numeric value');
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Date Validator */
// TONS of ways to do this one!

// Method One
let userMonth = Number(process.argv[2]);
let userDay = Number(process.argv[3]);

if (userMonth < 1 || userMonth > 12) {
  console.log('INVALID DATE');
} else if (userDay < 1 || userDay > 31) {
  console.log('INVALID DATE');
} else if (userMonth == 2 && userDay > 28) {
  console.log('INVALID DATE');
} else if (
  (userMonth == 4 ||
    userMonth == 6 ||
    userMonth == 8 ||
    userMonth == 9 ||
    userMonth == 11) &&
  userDay > 30
) {
  console.log('INVALID DATE');
} else {
  console.log('VALID DATE :)');
}

// Method 2 - Combining everything into one huge conditional
if (
  userMonth < 1 ||
  userMonth > 12 ||
  userDay < 1 ||
  userDay > 31 ||
  (userMonth == 2 && userDay > 28) ||
  ((userMonth == 4 ||
    userMonth == 6 ||
    userMonth == 8 ||
    userMonth == 9 ||
    userMonth == 11) &&
    userDay > 30)
) {
  console.log('INVALID DATE');
} else {
  ('VALID DATE :)');
}

// Method 3 - Using loops for the months with 30 days
// Highly unlikely students will go this route but just in case they get this idea, it is possible!
if (
  userMonth < 1 ||
  userMonth > 12 ||
  userDay < 1 ||
  userDay > 31 ||
  (userMonth == 2 && userDay > 28)
) {
  console.log('INVALID DATE');
} else {
  let thirtyMonths = [4, 6, 8, 9, 11];
  let valid;
  for (let i = 0; i < thirtyMonths.length; i++) {
    if (userMonth == thirtyMonths[i] && userDay > 30) {
      valid = false;
      break;
    }
  }
  if (valid === false) {
    console.log('INVALID DATE');
  } else {
    console.log('VALID DATE :)');
  }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra (Extra) Credit */

let userYear = process.argv[4];

// Add check to beginning for empty input
if (!userDay || !userMonth || !userYear) {
  console.log('INVALID RESPONSE... Please enter a month, day, and a year');
} else if (userMonth < 1 || userMonth > 12) {
  console.log('INVALID DATE');
} else if (userDay < 1 || userDay > 31) {
  console.log('INVALID DATE');
} else if (
  userMonth == 2 &&
  // If it's a leap year and it's above Feb 29, mark invalid
  ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) &&
  userDay > 29
) {
  console.log('INVALID DATE');
} else if (
  userMonth == 2 &&
  // If it's NOT a leap year and it's above Feb 28, mark invalid
  !((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) &&
  userDay > 28
) {
  console.log('INVALID DATE');
} else if (
  (userMonth == 4 ||
    userMonth == 6 ||
    userMonth == 8 ||
    userMonth == 9 ||
    userMonth == 11) &&
  userDay > 30
) {
  console.log('INVALID DATE');
} else {
  console.log('VALID DATE :)');
}

// Tried to condense it somehow but it won't run with this many conditionals... unless there's a bug I'm missing
// Feel free to find a new optimized method!
// if (
//   userMonth < 1 ||
//   userMonth > 12 ||
//   userDay < 1 ||
//   userDay > 31 ||
//   (userMonth == 2 &&
//     ((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) &&
//     userDay > 29) ||
//   (!((userYear % 4 == 0 && userYear % 100 != 0) || userYear % 400 == 0) &&
//     userDay > 28) ||
//   ((userMonth == 4 ||
//     userMonth == 6 ||
//     userMonth == 8 ||
//     userMonth == 9 ||
//     userMonth == 11) &&
//     userDay > 30)
// ) {
//   console.log('INVALID DATE');
// } else {
//   ('VALID DATE :)');
// }
