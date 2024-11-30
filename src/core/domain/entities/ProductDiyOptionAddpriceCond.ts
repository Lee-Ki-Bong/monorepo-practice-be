import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pdapc_uid", ["pdapcUid"], {})
@Entity("product_diy_option_addprice_cond", { schema: "makeshop" })
export class ProductDiyOptionAddpriceCond {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", {
    primary: true,
    name: "pdap_uid",
    unsigned: true,
    default: () => "'0'",
  })
  pdapUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pdapc_uid", unsigned: true })
  pdapcUid: number;

  @Column("int", { name: "pdapc_cond", unsigned: true, default: () => "'0'" })
  pdapcCond: number;

  @Column("int", { name: "pdapc_price", unsigned: true, default: () => "'0'" })
  pdapcPrice: number;

  @Column("enum", {
    name: "pdapc_impose_type",
    enum: ["", "DUPL", "ONCE"],
    default: () => "'DUPL'",
  })
  pdapcImposeType: "" | "DUPL" | "ONCE";
}
