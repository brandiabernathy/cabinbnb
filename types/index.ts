export interface Property {
    image: string;
    price: number;
    location: {
        city: string;
        state: string;
    }
    contact: [ number, string];
    isAvailable: boolean;
}

export interface Review {
    name: string;
    stars: number;
    description: string;
    date: string;
}