import { Injectable } from '@angular/core';
import { Store } from './store';
import { User } from './user';
import { Product } from './product';

@Injectable()
export class Booker {

    private _mainSuppliers: User[] = [
        new User('African'),
        new User('Chinese'),
        new User('Unknown'),
    ];


    public get mainSuppliers(): User[] {

        return this._mainSuppliers
            .filter(supplier => supplier.name !== 'Unknown');

    }

    public getUser(userName: string): User {

        let currentUser: User;

        if (!userName || userName.length < 3) {
            throw new Error("Non-valid username!");
        }

        let supplierFound = this._mainSuppliers
            .find(supplier => supplier.name === userName);

        if (supplierFound) {
            currentUser = supplierFound;

        } else {
            currentUser = new User(userName);
            this._mainSuppliers.push(currentUser);
        }
        console.log(this._mainSuppliers);
        return currentUser;
    }

    public renewStore(): Store {

        let product1 = new Product("Apple", 20, 200);
        product1.owner = "African";
        let product2 = new Product("Pear", 10, 300)
        product2.owner = "Chinese";

        let store = new Store();

        if (localStorage.getItem("store")) {

            var storeSaved = JSON.parse(localStorage.getItem("store"));

            for (let prod of storeSaved._products) {
                let prod1 = new Product(prod._name, prod._weight, prod._price);
                prod1.owner = prod._owner;
                store.addProduct(prod1);
            }
            store.currentUserName = storeSaved._currentUser;

        } else {
            store.addProduct(product1);
            store.addProduct(product2);
            store.currentUserName = "Unknown";
        }
        return store;
    }

    public saveStore(storeToSave: Store): void {
        localStorage.setItem("store", JSON.stringify(storeToSave));
    }

    public saveSuppliers(usersToSave: User[]): void {
        localStorage.setItem("users", JSON.stringify(usersToSave));
    }

    public renewSuppliers(): User[] {

        if (localStorage.getItem("users")) {

            var usersSaved = JSON.parse(localStorage.getItem("users"));
            this._mainSuppliers = new Array();
            
            for (let user of usersSaved) {

                let user1 = new User(user._name);
                user1.addIncome(user._income);
                this._mainSuppliers.push(user1);

            }
            return this._mainSuppliers;

        } else {
            return this._mainSuppliers;
        }

    }
}