function projectsCreation(input) {

    let nameArchitect = (input[0]);
    let projectsCreation = Number(input[1]);
    let oneProjectCompleteHours = 3 ;
    let resultForCompleteProjects = Number(input[1]) * oneProjectCompleteHours;

    console.log(`The architect ${nameArchitect} will need ${resultForCompleteProjects} hours to complete ${projectsCreation} project/s.`)

}
projectsCreation(["George", "4"])
projectsCreation(["Sanya ", "9"])
//"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
