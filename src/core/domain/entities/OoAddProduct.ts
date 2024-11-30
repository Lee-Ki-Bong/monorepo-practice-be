import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_add_prd_uid", ["addPrdUid"], {})
@Entity("oo_add_product", { schema: "makeshop" })
export class OoAddProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "add_prd_uid", unsigned: true })
  addPrdUid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("mediumtext", { name: "basket_set" })
  basketSet: string;

  @Column("int", { name: "issue_price", default: () => "'0'" })
  issuePrice: number;

  @Column("varchar", { name: "add_prd_account", length: 30 })
  addPrdAccount: string;

  @Column("varchar", { name: "add_prd_accounter", length: 30 })
  addPrdAccounter: string;

  @Column("varchar", { name: "add_prd_bankname", length: 30 })
  addPrdBankname: string;

  @Column("char", { name: "add_prd_method", length: 1, default: () => "'B'" })
  addPrdMethod: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "S", "C", "N"],
    default: () => "'S'",
  })
  payStatus: "" | "S" | "C" | "N";

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("varchar", { name: "admin_memo", length: 255 })
  adminMemo: string;

  @Column("varchar", { name: "admin_memo_writer", length: 12 })
  adminMemoWriter: string;

  @Column("datetime", {
    name: "add_prd_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addPrdDate: Date;
}
