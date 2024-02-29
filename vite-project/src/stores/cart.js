import { reactive } from 'vue'

export const cart = reactive([])

export function calculateItemTotal() {
  for(let i = 0; i < cart.length; i++) {
    cart[i].itemTotal = cart[i].unitCost * cart[i].quantity;
  };
}