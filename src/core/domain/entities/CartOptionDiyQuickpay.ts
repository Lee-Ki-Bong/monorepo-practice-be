import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cpd_id", ["cpdId"], {})
@Entity("cart_option_diy_quickpay", { schema: "makeshop" })
export class CartOptionDiyQuickpay {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "cart_id",
    unsigned: true,
    default: () => "'0'",
  })
  cartId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "cpd_id", unsigned: true })
  cpdId: number;

  @Column("int", { name: "pdao_uid", unsigned: true, default: () => "'0'" })
  pdaoUid: number;

  @Column("int", { name: "pdap_uid", unsigned: true, default: () => "'0'" })
  pdapUid: number;

  @Column("int", { name: "pdapc_uid", unsigned: true, default: () => "'0'" })
  pdapcUid: number;

  @Column("enum", {
    name: "cpd_type",
    enum: ["", "BASIC", "SELECT", "ADDPRICE", "INPUT"],
    default: () => "'BASIC'",
  })
  cpdType: "" | "BASIC" | "SELECT" | "ADDPRICE" | "INPUT";

  @Column("mediumtext", { name: "cpd_value" })
  cpdValue: string;

  @Column("int", { name: "cpd_price", default: () => "'0'" })
  cpdPrice: number;

  @Column("int", { name: "cpd_stock", unsigned: true, default: () => "'0'" })
  cpdStock: number;

  @Column("mediumtext", { name: "cpd_condition" })
  cpdCondition: string;
}
