a && b // both (a) AND (b) MUST be true.

a || b // one of (a) OR (b) MUST be true.

const hasDriverLicence = true; // can be false
const hasGoodVision = true; // can be false

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodVision;

if (shouldDrive) {
    console.log('You are able to drive!');
} else {
    console.log('Someone else ought to drive!');
}

const isTired = true;
console.log(hasDriverLicence || hasGoodVision || isTired);
console.log(hasDriverLicence && hasGoodVision && (!isTired));