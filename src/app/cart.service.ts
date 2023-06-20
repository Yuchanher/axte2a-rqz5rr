import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /* propriedade para armazenar a matriz dos produtos atuais no carrinho.*/
  items: Product[] = [];
  /* método anexa um produto a uma matriz deitems*/
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
