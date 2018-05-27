export default function getColorFromUserId(userId) {

    let output = [];
    for(let i = 0; i < 3; i++) {
        output.push(userId.charCodeAt(i) * 5 % 225); // convert char to charcode, modulus make sure that the number is not larger than max rgb values. (* 5 - magic to get nice colors)
    }

    return `rgb(${output.join()})`; // joins all elements of an array into a string
}