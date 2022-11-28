#!/usr/bin/env node
import { roll } from '../lib/roll.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

async function process_args() {
  console.log(JSON.stringify(roll(args.sides, args.dice, args.rolls)));
}

process_args(args);
