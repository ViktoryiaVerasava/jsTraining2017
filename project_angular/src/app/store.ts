import { Product } from './product';

export class Store {

      private _products: Product[] = [];
      private _currentUser: string;

      constructor() {
      }

      public get products(): Product[] {

            return this._products;

      }
      public set products(products: Product[]) {

            this._products = products;

      }

      public get currentUserName(): string {

            return this._currentUser;

      }
      public set currentUserName(currentUserName: string) {

            this._currentUser = currentUserName;

      }

      public addProduct(product: Product): void {

            let prodPresence = this.products.find(pr => (pr.name).toLowerCase() === (product.name).toLowerCase());

            if (!product.name || !product.weight || !product.price) {
                  throw new Error('Fill all product parameters!');
            }
            if (product.name.length < 3) {
                  throw new Error('Enter full product name!');
            }
            if ((product.weight <= 0) || (product.price <= 0)) {
                  throw new Error('Invalid values!');
            }

            if (prodPresence) {
                  throw new Error(`Product ${prodPresence.name} is already exist!`);
            }
            this._products.push(product);
      }

      public removeProduct(product: Product): void {

            this._products = this._products.filter(pr => pr.name != product.name);

      }

      public static toJson(store: Store): any {
            return {
                  products: store._products.map(pr => Product.toJson(pr)),
                  currentUser: store.currentUserName
            }
      }

      public static fromJson(json: any): Store {
            let store: Store = new Store();
            store.products = json.products.map(pr => Product.fromJson(pr));
            store.currentUserName = json._currentUser;
            return store;
      }

}