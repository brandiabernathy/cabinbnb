export interface Property {
    id: number,
    image: string;
    sleeps: number
    price: number;
    location: {
        city: string;
        state: string;
    }
}

export interface Review {
    id: number,
    propertyId: number,
    name: string;
    rating: number;
    description: string;
    date: string;
}