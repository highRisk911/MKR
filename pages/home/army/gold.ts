import { Information } from "./information";

export class Gold implements Information{
  private count:number;

  constructor(count:number){
    this.count = count;
  }

  getName():string{
    return "gold";
  }
  
  getCount():number{
    return this.count;
  }
 

}