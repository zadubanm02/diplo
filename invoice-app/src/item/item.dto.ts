import { Field, InputType } from "@nestjs/graphql";

export class ItemDTO{
    id:string;
    name:string;
    description: string;
    rate: number;
    //quantity: number
}

@InputType()
export class CreateItemDTO{
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    rate: number;
}


