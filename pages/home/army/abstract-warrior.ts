import { Equipment } from './equipment';
import { Gold } from './gold';
import { Information } from './information';

export abstract class AbstractWarrior implements Information {
  private name: string;
  private count: number;
  private maxSpeed: number;
  private equipment: Equipment;
  private gold?: Gold;
  private additionalEquipment? : Equipment;

  constructor(
    name: string,
    count: number,
    maxSpeed: number,
    equipment: Equipment,
    gold?: Gold,
    additionalEquipment?: Equipment
  ) {
    this.name = name;
    this.count = count;
    this.maxSpeed = maxSpeed;
    this.equipment = equipment;
    if(gold){
      this.gold = gold;
    }
    if(additionalEquipment){
      this.additionalEquipment = additionalEquipment;
    }
  }

  getName(): string {
    return this.name;
  }

  getCount(): number {
    return this.count;
  }

  getMaxSpeed(): number {
    return this.maxSpeed;
  }

  getGold(): number {
    return this.gold.getCount();
  }

  getEquipment(): Equipment{
    return this.equipment;
  }

  getAdditionalEquipment(): Equipment {
    return this.additionalEquipment;
  }
}
