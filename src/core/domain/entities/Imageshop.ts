import { Column, Entity } from "typeorm";

@Entity("imageshop", { schema: "makeshop" })
export class Imageshop {
  @Column("int", { primary: true, name: "icontype", default: () => "'0'" })
  icontype: number;

  @Column("varchar", { name: "toptype", length: 10 })
  toptype: string;

  @Column("varchar", { name: "maintype", length: 10 })
  maintype: string;

  @Column("varchar", { name: "menutype", length: 10 })
  menutype: string;

  @Column("int", { name: "top_height", nullable: true, default: () => "'55'" })
  topHeight: number | null;

  @Column("char", {
    name: "oneframetype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  oneframetype: string | null;
}
