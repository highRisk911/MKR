import { Information } from "./information";

export class Equipment implements Information{
  private name:string;
  private count:number; 

  constructor(name:string, count:number){
    this.count = count;
    this.name = name;
  }

  getName():string{
    return this.name;
  }

  getCount():number{
    return this.count; 
  }
}