function checkVotingEligibility(age) {
    let voterStatus
    
    if (age >= 18) {
        voterStatus = "eligible"
    } else {
        voterStatus = "not-eligible"
    }

    return voterStatus
}

let eligibility = checkVotingEligibility(prompt(`enter your age: `))

console.log(eligibility)