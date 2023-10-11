export interface Rating {
    rate: number;
    count: number;
}
export interface IClothes {
    id: number;
    category: string;
    description: string;
    price: number;
    image: string;
    rating: Rating
    title: string;
}