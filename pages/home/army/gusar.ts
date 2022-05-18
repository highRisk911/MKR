import { AbstractWarrior } from "./abstract-warrior";
import { Equipment } from "./equipment";
import { Gold } from "./gold";

const NAME = 'Gusar';
const COUNT = 1;
const MAX_SPEED = 15;
const EQUIPMENT_NAME = 'Horse Food';
const EQUIPMENT_COUNT = 1;
const COST = 2;

export class Gusar extends AbstractWarrior {
    

    constructor(){
      super(NAME, COUNT, MAX_SPEED, new Equipment(EQUIPMENT_NAME, EQUIPMENT_COUNT), new Gold(COST));
    }

    
}