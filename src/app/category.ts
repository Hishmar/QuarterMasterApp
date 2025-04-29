export interface Category{
    name: string;
    type?: string;
    estimatedExpiryTime: number;
    defaultUnit: string;
    defaultSpecificUnit?: string;
    density?: number;
    tags: Array<string>;
}