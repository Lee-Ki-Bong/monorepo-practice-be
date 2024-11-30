import { Column, Entity, Index } from "typeorm";

@Index("regdate", ["adminuser", "created"], {})
@Entity("kirin", { schema: "makeshop" })
export class Kirin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "titleno",
    unsigned: true,
    default: () => "'0'",
  })
  titleno: number;

  @Column("varchar", { name: "titletxt", nullable: true, length: 255 })
  titletxt: string | null;

  @Column("int", { name: "width", unsigned: true, default: () => "'0'" })
  width: number;

  @Column("int", { name: "height", unsigned: true, default: () => "'0'" })
  height: number;

  @Column("mediumtext", { name: "xml", nullable: true })
  xml: string | null;

  @Column("varchar", { name: "created", length: 14 })
  created: string;

  @Column("varchar", { name: "modyfied", length: 14 })
  modyfied: string;
}
