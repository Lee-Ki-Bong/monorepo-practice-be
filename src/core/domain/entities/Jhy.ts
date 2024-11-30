import { Column, Entity } from "typeorm";

@Entity("jhy", { schema: "makeshop" })
export class Jhy {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;
}
