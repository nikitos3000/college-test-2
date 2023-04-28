#!/usr/bin/env node
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';
import _ from 'lodash'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
let split = content.split('\r\n')
let vvv = split.slice(1, split.length)
console.log(`Всего видов ${vvv.length}`);

let sss = split.map(f => f.split('|').filter(f => f !='').map(p => p.trim()))
let lll = sss.slice(1, sss.length)
let power = lll.map((f) => f[1])
let maxPower = _.max(power)
let prices = lll.map((f) => f[6])
let index = power.indexOf(String(maxPower))
let index1 = index
let eee = prices[index1]
let otvet1 = eee * 10 
console.log(`существа 1 по силе: ${otvet1}`); ////////////////////fffffffffff

power.splice(index1, 1)
let secondMaxPower = _.max(power)
let index2 = power.indexOf(String(secondMaxPower))
let index22 = index2+1
let eeee = prices[index22]
let otvet2 = eeee * 20 
console.log(`существа 2 по силе: ${otvet2}`); ////////////////////fffffffffff


let rrr = lll.map(r => r[0]);
// END