const year = document.querySelector('.year input');
const month = document.querySelector('.month input');
const day = document.querySelector('.day input');
const submitBtn = document.querySelector('.submit')
const titles = document.querySelectorAll('.box .title')
// console.log(titles)

const resultYear = document.querySelector('#resultYear p');
const resultMonth = document.querySelector('#resultMonth p');
const resultDay = document.querySelector('#resultDay p');

// console.log(year, month, day)
// console.log(resultYear, resultMonth, resultDay)


const today = new Date();
console.log(today)
function myBirthday(year, month, day) {

    const birthdate = new Date(year, month-1, day);
    console.log("my birthdate => " + birthdate)

    const myNextBirthdate = new Date(today.getFullYear(), month - 1, day);
    console.log("myNextBirthdate => " + myNextBirthdate);

    if(today < birthdate) {
        console.log("sirr t9ewad")
        return false
    }else {
        const myAge = Math.floor((today - birthdate) / (1000*3600*24*365));
        console.log(myAge);
        resultYear.innerHTML = myAge + " ";
        resultYear.style.color = "#854dff";

        const monthsLeft = Math.floor((myNextBirthdate - today) / (1000*3600*24*30));
        console.log(monthsLeft);
        resultMonth.innerHTML = `${monthsLeft} `;
        resultMonth.style.color = "#854dff";

        const daysLeft = Math.floor(((myNextBirthdate - today) % (1000*3600*24*30)) / (1000*3600*24));
        console.log(daysLeft);
        resultDay.innerHTML = `${daysLeft} `;
        resultDay.style.color = "#854dff";
    }

    
}

// myBirthday(1999,11,16);



// Submit the value from myBirthdate function to the DOM

submitBtn.addEventListener('click', ()=> {
    // Set the regex max number for each input 
    let daysAndMonthRegex = /(0-9){2}/; 
    let yearRegex = /\d{4}/; 
    // check the input is empty 
    if((year.value && month.value && day.value) === '') {

        // check if the limite of inputs is two numbers
        if(year.value.length === today.getTime() && year.value.length < today.getFullYear()) {
            return true

        }else {
            console.log("invalid year")
            console.log(year.value.length)
        }
        let inputs = Array.from(document.querySelectorAll('.inputs .box input'))
        // console.log('ma3amrinx')
        // year.classList.add('errorInput')
        inputs.forEach(input => {
            input.classList.add('errorInput')
        });
        titles.forEach(p => {
            p.classList.add('errorInput')
        });
    }else {
    }
    
    
})
const {myAge, monthsLeft, daysLeft} = myBirthday(1996, 11, 16);
























// function calculateAge(birthdate) {
//     const today = new Date();
//     birthdate = new Date(birthdate);
//     // console.log(birthdate)
//     const age = today.getFullYear() - birthdate.getFullYear() - (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
//     // console.log(age)
    
//     const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
//     console.log("nextBirthday => " + nextBirthday)
//     console.log(today > nextBirthday)
//     if (today > nextBirthday) {
//         nextBirthday.setFullYear(today.getFullYear() + 1);
//     }

//     const timeUntilBirthday = nextBirthday - today;
//     console.log("timeUntilBirthday => " + timeUntilBirthday / (1000*3600*24*30));
//     const monthsLeft = Math.floor(timeUntilBirthday / (30 * 24 * 60 * 60 * 1000));
//     const daysLeft = Math.floor((timeUntilBirthday % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
//     console.log("daysLeft " + daysLeft)
    
//         return { age, monthsLeft, daysLeft };
// }
// // Replace "YYYY-MM-DD" with your birthdate
// const birthdate = "1999-11-16";
// const { age, monthsLeft, daysLeft } = calculateAge(birthdate);

// console.log(`Your age: ${age} years`);
// console.log(`Months left until your next birthday: ${monthsLeft} months`);
// console.log(`Days left until your next birthday: ${daysLeft} days`);
