export class Deal {

      private _productWeight: number = 0;
      private _currentBuyerName: string;

      constructor() {
      }

      public get productWeight(): number {
            return this._productWeight;
      }

      public get currentBuyerName(): string {
            return this._currentBuyerName;
      }

      public set productWeight(weight: number) {
            this._productWeight = weight;
      }

      public set currentBuyerName(name: string) {
            this._currentBuyerName = name;
      }

      public static toJson(deal: Deal): any {
            return {
                  productWeight: deal.productWeight,
                  currentBuyerName: deal.currentBuyerName  
            }
      }

      public static fromJson(json: any): Deal {
            let deal:Deal = new Deal();
            deal.productWeight=json.productWeight;
            deal.currentBuyerName=json.currentBuyerName;
            return deal;
      }


}