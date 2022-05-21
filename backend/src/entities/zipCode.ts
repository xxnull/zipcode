import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class zipCode extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    zip: string;

    @Field()
    @Column()
    country: string;

    @Field()
    @Column()
    created: Date;

    @Field()
    @Column()
    json: string;
}