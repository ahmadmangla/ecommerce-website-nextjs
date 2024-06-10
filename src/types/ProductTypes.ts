export interface Product {
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    quantity?: number | undefined,
    rating: number,
    price: number
}
