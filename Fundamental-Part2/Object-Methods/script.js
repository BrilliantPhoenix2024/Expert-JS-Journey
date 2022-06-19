const Atefeh = {
    firstName : 'Atefeh',
    lastName : 'Mohammadi',
    job : 'Student',
    birthYear : 1990,
    myStatus : {
        currentLearning : ['JaveScript', 'ReactJS'],
        currentWorking : ['Python', 'Django'],
    }, 
    friends : ['Sara', 'Amir', 'Shayan', 'Mohammad'],
    hasDriversLicence : true, // or can be false.

    //property : Value (Function Expretion)
    // calcAge : function (birthYear) {  
    //     return 2024 - birthYear;
    // },

    // calcAge : function () {
    //     console.log(this); 
    //     return 2024 - this.birthYear;
    // },

    calcAge : function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary : function () {
        return `${this.firstName} is a ${this.calcAge()} year old, ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
    },
};


// console.log(Atefeh.calcAge(1990));
// console.log(Atefeh['calcAge'](1990));


console.log(Atefeh.calcAge());
console.log(Atefeh.age);
console.log(Atefeh.getSummary());