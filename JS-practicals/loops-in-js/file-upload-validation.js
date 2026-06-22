let fileSize

fileSize = prompt(`enter the file size: `)

while (fileSize > 5) {
    console.log(`You are exceeding the file size. please upload a file within 5MB.`)
    fileSize = prompt(`enter the file size: `)
}

if (fileSize <= 5) {
    console.log(`your file uploaded!`)
}