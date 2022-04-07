export enum ShopType {
    pyaterochka = "Пятёрочка",
    verno = "Верный",
    perekrestok = "Перекрёсток",
    magnit = "Магнит"
}

export enum UnitType {
    kg = "кг",
    g = "г",
    l = "л",
    piece = "шт",
}

export type ProductType = {
    name: string,
    id: number,
    date: Date,
    price?: number,
    amount: number,
    unit?: UnitType,
    shop?: ShopType,
    bought: boolean,
};

export type EditProductType = {
    id: number,
    payload: Partial<Omit<ProductType, "id" | "date" | "bought">>
}