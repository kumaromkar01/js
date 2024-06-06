const timestamp = 1715610900;
const date = new Date(timestamp * 1000); // Convert to milliseconds

console.log(`Date: ${date.toLocaleDateString()}`);
console.log(`Time: ${date.toLocaleTimeString()}`);