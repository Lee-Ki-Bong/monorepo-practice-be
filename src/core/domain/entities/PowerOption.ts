import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_oid", ["oid"], {})
@Index("mandatory", ["adminuser", "mandatory"], {})
@Entity("power_option", { schema: "makeshop" })
export class PowerOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

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

  @Column("int", { name: "b2b_uid", nullable: true, unsigned: true })
  b2bUid: number | null;

  @Column("mediumtext", { name: "value" })
  value: string;

  @Column("mediumtext", { name: "price" })
  price: string;

  @Column("varchar", { name: "note", length: 100 })
  note: string;
}
