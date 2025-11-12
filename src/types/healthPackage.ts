
export interface Test {
    name: string;
    price: number;
};

export interface IHealthPackage {
    _id: string;
    packageName: string;
    tests: Test[];
    totalCost: number;
    discountedPrice: number;
    currency: "BDT" | "USD" | string;
    createdAt: string;
    updatedAt: string;
};
