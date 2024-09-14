function depositCalculator(input){

    let deposit = Number(input[0]) * Number((input[2])/100)
    let interest = deposit / 12
    let totalSum = Number(input[0]) + Number((input[1])*interest)

    console.log(totalSum)

    
}
depositCalculator(["200", "3", "5.7"])
depositCalculator(["2350", "6", "7"])

//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
//1. Депозирана сума – реално число в интервала [100.00 … 10000.00]
//2. Срок на депозита (в месеци) – цяло число в интервала [1…12]
//3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]

//1. Изчисляваме натрупаната лихва: 200 * 0.057 (5.7%) = 11.40 лв. 
//2. Изчисляваме лихвата за 1 месец: 11.40 лв. / 12 месеца = 0.95 лв. 
//3. Общата сума е: 200 лв. + 3 * 0.95 лв. = 202.85 лв.