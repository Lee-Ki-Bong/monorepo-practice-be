import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_oid", ["oid"], {})
@Index("mandatory", ["adminuser", "mandatory"], {})
@Entity("repos_option_info", { schema: "makeshop" })
export class ReposOptionInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "rid",
    unsigned: true,
    default: () => "'0'",
  })
  rid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "oid", unsigned: true })
  oid: number;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("enum", {
    name: "mandatory",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mandatory: "" | "Y" | "N";

  @Column("longtext", { name: "value" })
  value: string;

  @Column("longtext", { name: "price" })
  price: string;
}
