import { greet } from './greet'

const arg = process.argv.slice(2).join(' ')
console.log(greet(arg))