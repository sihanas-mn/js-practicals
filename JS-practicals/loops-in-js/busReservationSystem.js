let seatCount = 0

for (let i = 0; i < 40; i++) {
    prompt(`please press enter / any key to book you seat: `)
    seatCount++
    console.log(`your seat number: ${seatCount}`)
}

if (seatCount >= 40) {
    console.log(`all seats are booked. come back tomorrow!`)
}