export interface Category{
    name: string;
    type: string;
    estimatedExpiryTime: number;
    unit?: string;
    density?: number;
    tags: Array<string>;
}