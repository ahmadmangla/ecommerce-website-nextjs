export interface Product {
    _id: string,
    title: string,
    imageUrl: string,
    description: string,
    quantity: 1,
    rating: number,
    price: number
    category: string,
}

export type id = string | null;