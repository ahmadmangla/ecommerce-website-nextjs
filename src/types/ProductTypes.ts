export interface Product {
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    quantity?: number,
    rating: number,
    price: number
    category: string,
}
