import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
    @Field()
    @Length(3, 9)
    zip: string;

    @Field()
    @Length(1, 255)
    country: string;
}