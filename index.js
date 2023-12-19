let businessmen = [
    {
        name: "Hasan",
        age: "2008-07-28",
        gender: 'm',
        tax: 12,
        budget: 1000,
        expensesPerYear: [200, 100, 50]
    },
    {
        name: "Alsafir",
        age: "2008-10-13",
        gender: 'm',
        tax: 9,
        budget: 2500,
        expensesPerYear: [200, 500, 50]
    },
    {
        name: "Allayor",
        age: "2008-06-24",
        gender: 'w',
        tax: 12,
        budget: 2000,
        expensesPerYear: [200, 100, 120]
    },
    {
        name: "Radmir",
        age: "2007-04-28",
        gender: 'w',
        tax: 5,
        budget: 4000,
        expensesPerYear: [200, 1000, 500]
    },
    {
        name: "Jaxongir",
        age: "2006-09-03",
        gender: 'm',
        tax: 13,
        budget: 3000,
        expensesPerYear: [200, 100, 1200]
    },
    {
        name: "Bexruz",
        age: "2007-11-27",
        gender: 'w',
        tax: 9,
        budget: 2400,
        expensesPerYear: [200, 100, 900]
    },
    {
        name: "Alibek",
        age: "2006-04-12",
        gender: 'm',
        tax: 15,
        budget: 4200,
        expensesPerYear: [200, 100, 2000]
    }
]
let sucesfull = []
let unsucesfull = []



for (let biznes of businessmen) {
    let total = 0
    for (let expense of biznes.expensesPerYear) {
        total += Math.round(expense / 12)
    }
    biznes.expensesPerYear = total

    let budget_per_month = biznes.budget / 12
    //    console.log(budget_per_month);

    // 1. Задание
    let percent = budget_per_month / biznes.tax
    console.log(`1 Задание ${percent}`);
    // 2. Задание
    let delenie = biznes.budget - biznes.expensesPerYear
    let double_precent = delenie / biznes.tax
    console.log(`2 Задание${double_precent}`);
    // 3. Задание
if(double_precent > 0) {
    sucesfull.push(double_precent)
} else{
    unsucesfull.push(double_precent)
}

}
console.log(`3 задание ${sucesfull}`);
console.log(`3 задание ${unsucesfull}`);







