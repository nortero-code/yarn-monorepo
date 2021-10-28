import { hi as h1 } from "shared";
import { hi as h2 } from "shared/bar";
import { hi as h3 } from "shared/test/util";

console.log(h1())
console.log(h2())
console.log(h3())