import foods from "./foods";
import { choice, remove } from "./helpers";

let food = choice(foods);
console.log(`I would like to have this ${food}, please`);
console.log(`Here you go ${food}`);
console.log(`Can i have one more`);
let remaining_arr = remove(foods, food);
console.log(`Sorry we have only ${remaining_arr.length} foods left`);
