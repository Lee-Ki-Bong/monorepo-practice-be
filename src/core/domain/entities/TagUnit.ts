import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_tag_unit", { schema: "makeshop" })
export class TagUnit {
  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "tag_uid",
    unsigned: true,
  })
  tagUid: number;

  @Column("char", { name: "tag_name", length: 30 })
  tagName: string;
}
