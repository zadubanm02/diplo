
export class ItemDTO{
    id:string;
    name:string;
    description: string;
    rate: number;
    //quantity: number
}

export class CreateItemDTO{
    name: string;
    description: string;
    rate: number;
}
