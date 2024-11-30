import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_oe_uid", ["oeUid"], {})
@Index("uq_oe_title", ["adminuser", "oeTitle"], { unique: true })
@Entity("oo_excel", { schema: "makeshop" })
export class OoExcel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "oe_uid", unsigned: true })
  oeUid: number;

  @Column("varchar", { name: "oe_title", length: 50 })
  oeTitle: string;

  @Column("mediumtext", { name: "oe_items" })
  oeItems: string;

  @Column("enum", {
    name: "yn_printall",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  ynPrintall: "" | "Y" | "N";

  @Column("enum", {
    name: "provider",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  provider: "" | "Y" | "N" | null;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("enum", {
    name: "alldown",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  alldown: "" | "Y" | "N";

  @Column("char", { name: "order_by_type", length: 2, default: () => "'N'" })
  orderByType: string;
}
