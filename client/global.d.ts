interface IGroceryItem {
  id: number;
  price: number;
  name: string;
  unit: string;
  imageUrl: string;
}

interface ICartItem {
  groceryItem: IGroceryItem;
  qty: number;
}

declare module 'muicss/lib/react/container';
declare module 'muicss/lib/react/appbar';