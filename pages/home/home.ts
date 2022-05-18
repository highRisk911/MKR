import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbstractWarrior } from './army/abstract-warrior';
import { Archer } from './army/archer';
import { Dragon } from './army/dragon';
import { Gusar } from './army/gusar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  rezult: string[];
  constructor(public navCtrl: NavController) {}
  ras(gusarN: string, dragonN: string, archerN: string) {
    this.rezult = new Array();
    let gusar_input = parseInt(gusarN);
    let dragon_input = parseInt(dragonN);
    let archer_input = parseInt(archerN);

    let navy = new Array<AbstractWarrior>();
    let count = gusar_input;

    //creating gusar array

    for (let i = 0; i < count; i++) {
      navy[i] = new Gusar();
    }

    let warrior: AbstractWarrior = navy[gusar_input - 1];

    let str: string =
      warrior.getName() +
      ': GOLD: ' +
      count * warrior.getGold() +
      ' ' +
      warrior.getEquipment().getName() +
      ': ' +
      count * warrior.getEquipment().getCount() +
      ' Speed:' +
      warrior.getMaxSpeed();

    this.rezult.push(str);

    //creating dragon array
    count = dragon_input;
    for (let i = 0; i < count; i++) {
      navy.push(new Dragon());
    }

    warrior = navy[gusar_input + count - 1];

    str =
      warrior.getName() +
      ' ' +
      warrior.getEquipment().getName() +
      ': ' +
      count * warrior.getEquipment().getCount() +
      ' ' +
      warrior.getAdditionalEquipment().getName() +
      ': ' +
      count * warrior.getAdditionalEquipment().getCount() +
      ' Speed:' +
      warrior.getMaxSpeed();

    this.rezult.push(str);

    //creating archer array
    count = archer_input;
    for (let i = 0; i < count; i++) {
      navy.push(new Archer());
    }

    warrior = navy[gusar_input + dragon_input + count - 1];

    str =
      warrior.getName() +
      ': GOLD: ' +
      count * warrior.getGold() +
      ' ' +
      warrior.getEquipment().getName() +
      ': ' +
      count * warrior.getEquipment().getCount() +
      ' Speed:' +
      warrior.getMaxSpeed();

    this.rezult.push(str);

    let allCount = navy.length;
    let speed = 0;
    let gold = 0;
    let maxSpeed = 0;
    let minSpeed = 10000000000;

    navy.forEach((warrior) => {
      speed += warrior.getMaxSpeed();
      if (warrior.getMaxSpeed() > maxSpeed) {
        maxSpeed = warrior.getMaxSpeed();
      }

      if (warrior.getMaxSpeed() < minSpeed) {
        minSpeed = warrior.getMaxSpeed();
      }
    });
    this.rezult.push('AVG SPEED: ' + speed / allCount);
    this.rezult.push('MIN SPEED: ' + minSpeed);
    this.rezult.push('MAX SPEED: ' + maxSpeed);

    gold =
      gusar_input * new Gusar().getGold() +
      archer_input * new Archer().getGold();
    this.rezult.push('GOLD: ' + gold);
  }
}
