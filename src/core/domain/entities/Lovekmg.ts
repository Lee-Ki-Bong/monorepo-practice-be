import { Column, Entity } from "typeorm";

@Entity("lovekmg", { schema: "makeshop" })
export class Lovekmg {
  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("mediumtext", { name: "content" })
  content: string;
}
