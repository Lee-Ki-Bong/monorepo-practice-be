import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "optionType"], {})
@Index("datekey", ["adminuser", "ordernum", "brandcode"], {})
@Index("idx_auto_num", ["num"], {})
@Index("ordernum", ["ordernum"], {})
@Entity("order_basket_10", { schema: "makeshop" })
export class OrderBasket_10 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ordernum",
    length: 26,
    default: () => "'X'",
  })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num", unsigned: true })
  num: number;

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

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("int", { name: "reserve", nullable: true, default: () => "'0'" })
  reserve: number | null;

  @Column("int", { name: "b2b_uid", nullable: true, unsigned: true })
  b2bUid: number | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("varchar", { name: "date", nullable: true, length: 8 })
  date: string | null;
}
