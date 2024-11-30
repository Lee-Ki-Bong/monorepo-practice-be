import { Column, Entity } from "typeorm";

@Entity("flashtemplate", { schema: "makeshop" })
export class Flashtemplate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 12 })
  type: string;

  @Column("enum", {
    name: "random_type",
    nullable: true,
    enum: ["", "Y", "N", "S"],
    default: () => "'N'",
  })
  randomType: "" | "Y" | "N" | "S" | null;

  @Column("int", { name: "code", unsigned: true, default: () => "'0'" })
  code: number;

  @Column("int", { name: "width", unsigned: true, default: () => "'0'" })
  width: number;

  @Column("int", { name: "height", unsigned: true, default: () => "'0'" })
  height: number;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display: string | null;

  @Column("mediumtext", { name: "xml", nullable: true })
  xml: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
