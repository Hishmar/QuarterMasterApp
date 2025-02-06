export interface Item{
    itemId?: bigint;
    expiryStart?: Date;
    expectedExpiry: Date;
    amount: number;
    category: string;
}