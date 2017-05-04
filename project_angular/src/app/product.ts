import { Deal } from './deal';

export class Product {

      private _name: string;
      private _price: number;
      private _weight: number;
      private _owner: string;
      private _currentDeal: Deal=new Deal();

      constructor(name: string, price: number, weight: number) {
            this._name = name;
            this._price = price;
            this._weight = weight;
      }

      public get name(): string {
            return this._name;
      }

      public set name(name: string) {
            this._name = name;
      }

      public get price(): number {
            return this._price;
      }

      public set price(price: number) {
            this._price = price;
      }

      public get weight(): number {
            return this._weight;
      }

      public set weight(weight: number) {
            this._weight = weight;
      }

      public get owner(): string {
            return this._owner;
      }

      public set owner(owner: string) {
            this._owner = owner;
      }

      public get currentDeal(): Deal {
            return this._currentDeal;
      }

      public set currentDeal(currentDeal: Deal) {
            this._currentDeal = currentDeal;
      }

      public static toJson(product: Product): any {
            return {
                  name: product.name,
                  price: product.price,
                  weight: product.weight,
                  owner: product.owner          
            }
      }

      public static fromJson(json: any): Product {
            let prod:Product =new Product(json.name, json.price, json.weight);
            prod.currentDeal = new Deal();
            prod.owner=json.owner;
            return prod;
      }
}