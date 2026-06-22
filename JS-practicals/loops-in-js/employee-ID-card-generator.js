let boilerPlate = "EMP"

for (i = 1; i < 101; i++) {
    prompt(`press enter / any button to get a new employee ID: `)
    console.log(`New employee ID is: ${boilerPlate}${i.toString().padStart(3, '0')}`)
}