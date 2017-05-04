import { Product } from './product';

export class User {

      private _name: string;
      private _income: number = 0;

      constructor(name: string) {
            this._name = name;
      }

      public get name(): string {
            return this._name;
      }

      public set name(name: string) {
            this._name = name;
      }

      public get income(): number {
            return this._income;
      }

      public addIncome(income: number) {
            this._income = this._income + income;
      }


      public static toJson(user: User): any {
            return {
                  name: user.name,
                  income: user.income,
            }
      }

}