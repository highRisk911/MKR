import { AbstractWarrior } from './abstract-warrior';
import { Equipment } from './equipment';

const NAME = 'Dragon';
const COUNT = 1;
const MAX_SPEED = 60;
const ADDITIONAL_EQUIPMENT_NAME = 'Woman';
const ADDITIONAL_EQUIPMENT_COUNT = 1;
const EQUIPMENT_NAME = 'Dragon Food';
const EQUIPMENT_COUNT = 1;

export class Dragon extends AbstractWarrior {
  constructor() {
    super(
      NAME,
      COUNT,
      MAX_SPEED,
      new Equipment(EQUIPMENT_NAME, EQUIPMENT_COUNT),
      null,
      new Equipment(ADDITIONAL_EQUIPMENT_NAME, ADDITIONAL_EQUIPMENT_COUNT)
    );
  }
}
