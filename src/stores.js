import { writable } from 'svelte/store';

export const cartItems = writable([]);
export const totalPrice = writable(0);