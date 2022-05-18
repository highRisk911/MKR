import { AbstractWarrior } from "./abstract-warrior";
import { Equipment } from "./equipment";
import { Gold } from "./gold";

const NAME = 'Archer';
const COUNT = 1;
const MAX_SPEED = 7;
const EQUIPMENT_NAME = 'Arrow';
const EQUIPMENT_COUNT = 10;
const COST = 1;

export class Archer extends AbstractWarrior{
 

  constructor(){
    super(NAME, COUNT, MAX_SPEED, new Equipment(EQUIPMENT_NAME, EQUIPMENT_COUNT), new Gold(COST));
  }

   
}