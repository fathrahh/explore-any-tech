import type { Foo } from './utils.ts';
import { sayHello } from "./utils.ts";
sayHello("World")

import * as utils from "./utils.ts";
utils.sayHello("World");

import { VERSION } from "https://deno.land/std/version.ts"
console.log(VERSION)

import * as mod from "https://deno.land/std@0.155.0/version.ts";

console.log(mod)

let something: Foo | undefined;

console.log(typeof something)