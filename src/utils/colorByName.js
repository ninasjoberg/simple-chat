export default function getColorFromName(name) {

    let output = [];
    for(let i = 0; i < 3; i++) {
        output.push(name.charCodeAt(i % name.length) * 30 % 225); // convert char to charcode (a number), modulus make sure that the number is not larger than max rgb values.
    }

    return `rgb(${output.join()})`; // toString 16 makes the normalizedNumber to a hexadecimal with 16 as base, like colors hexcode.
}