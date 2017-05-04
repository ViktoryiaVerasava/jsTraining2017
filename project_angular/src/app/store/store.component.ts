import { Component, OnInit } from '@angular/core';

import { Store } from '../store';
import { Product } from '../product';
import { Deal } from '../deal';
import { Booker } from '../booker';
import { User } from '../user';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  private _store: Store = new Store();
  public _vm: any;
  // public _currentUserName: string = 'Unknown';
  private _currentUser: User;
  private _ourSuppliers: User[];

  private updateVm(oldVm: any, store: Store, user: User): any {

    let newVM: any = oldVm;

    newVM.products = store.products;
    newVM.userName = user.name;
    return newVM;

  }

  constructor(private _booker: Booker) {
    this._vm = {};

  }

  ngOnInit() {

    this._store = this._booker.renewStore();
    this._currentUser = this._booker.getUser(this._store.currentUserName);
    this._ourSuppliers = this._booker.renewSuppliers();
  }

  public newProduct: Product = new Product("", null, null);
  public newUserName: string = "";


  public get vm(): any {
    this._vm = this.updateVm(this._vm, this._store, this._currentUser);
    return this._vm;
  }

  public addProduct(): void {
    try {
      this.newProduct.owner = this._currentUser.name;
      this._store.addProduct(this.newProduct);
    }
    catch (err) {
      alert(err);
    }

    this._booker.saveStore(this._store);

    this.newProduct = new Product("", null, null);
  }

  public changeUser(): void {
    try {
      this._currentUser = this._booker.getUser(this.newUserName);
      this._store.currentUserName = this._currentUser.name;
      this._booker.saveStore(this._store);
      this._booker.saveSuppliers(this._ourSuppliers);
    }
    catch (err) {
      alert(err);
    }
    this.newUserName = "";
  }

  private _seller: User = new User("Anonym");

  public buyProduct(product: Product): void {

    if ((product.currentDeal.productWeight >= 0) && (product.currentDeal.productWeight <= product.weight)) {

      try {

        this._seller = this._booker.getUser(product.owner);
        product.weight = product.weight - product.currentDeal.productWeight;

        this._seller.addIncome(product.currentDeal.productWeight * product.price);
        product.currentDeal = new Deal();

        this._booker.saveSuppliers(this._ourSuppliers);
      }
      catch (err) {
        alert(err);
      }

    } else {
      alert("Invalid deal!");
      product.currentDeal = new Deal();
    }

  }

  public get ourSuppliers(): User[] {
    return this._booker.mainSuppliers;
  }

  public get store(): Store {
    return this._store;
  }


}
