export class Quote {
    showInformation: boolean;
    constructor(public name: string,public information: string,public author:string, public postDate: Date, public counter1:number, public counter2:number){
      this.showInformation=false;
      this.counter1 = 0;
      this.counter2 = 0;
    }
}
