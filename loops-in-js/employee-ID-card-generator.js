let boilerPlate = "EMP"

for (i = 1; i < 101; i++) {
    console.log(`${boilerPlate}${i.toString().padStart(3, '0')}`)
}