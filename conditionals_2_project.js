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
// Will finish this at later date
