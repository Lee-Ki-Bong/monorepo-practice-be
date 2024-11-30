import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("datekey", ["adminuser", "ordernum", "brandcode"], {})
@Index("idx_auto_num", ["num"], {})
@Index("option_type", ["adminuser", "optionType"], {})
@Index("ordernum", ["ordernum"], {})
@Index("status", ["adminuser", "productUid", "status"], {})
@Entity("order_cherrybasket", { schema: "makeshop" })
export class OrderCherrybasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num", unsigned: true })
  num: number;

  @Column("int", { name: "product_uid", nullable: true, unsigned: true })
  productUid: number | null;

  @Column("char", { name: "status", length: 2, default: () => "'S1'" })
  status: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "NU", "NL", "OC", "PC", "PP", "PS"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "NU" | "NL" | "OC" | "PC" | "PP" | "PS";

  @Column("varchar", { name: "spname", length: 200 })
  spname: string;

  @Column("varchar", { name: "spname2", length: 200 })
  spname2: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { name: "addcode", nullable: true, length: 200 })
  addcode: string | null;

  @Column("varchar", { name: "brandname", nullable: true, length: 255 })
  brandname: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("int", { name: "amount", nullable: true })
  amount: number | null;

  @Column("enum", {
    name: "amount_chk",
    enum: ["", "HAVE", "NOT"],
    default: () => "'HAVE'",
  })
  amountChk: "" | "HAVE" | "NOT";

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("set", {
    name: "price_status",
    enum: ["BANK", "CARD", "REFUND", "CANCEL", "RF_REQUEST"],
  })
  priceStatus: ("BANK" | "CARD" | "REFUND" | "CANCEL" | "RF_REQUEST")[];

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("enum", {
    name: "reserve_chk",
    enum: ["", "N", "C", "Y"],
    default: () => "'N'",
  })
  reserveChk: "" | "N" | "C" | "Y";

  @Column("int", { name: "recmd_reserve", default: () => "'0'" })
  recmdReserve: number;

  @Column("int", { name: "b2b_uid", nullable: true, unsigned: true })
  b2bUid: number | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("varchar", { name: "date", nullable: true, length: 8 })
  date: string | null;

  @Column("char", { name: "deli_delay", nullable: true, length: 1 })
  deliDelay: string | null;

  @Column("enum", {
    name: "repay_status",
    nullable: true,
    enum: ["", "N", "S", "Y", "D"],
    default: () => "'N'",
  })
  repayStatus: "" | "N" | "S" | "Y" | "D" | null;
}
