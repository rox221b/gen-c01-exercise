let raceNumber = Math.floor(Math.random() * 1000);

const early = true;

const age = 18;

if (age >= 18 && early === true) {
  raceNumber += 1000;
}

if (age >18 && early === true) {
  console.log(`${raceNumber} will race at 9:30 am`)
} else if (age <=18) {
  console.log(`${raceNumber} will race at 12:30 pm`)
} else {
  console.log(`Please see the registration desk`)
}