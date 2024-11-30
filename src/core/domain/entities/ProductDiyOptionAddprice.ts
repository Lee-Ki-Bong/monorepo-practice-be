import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pdap_uid", ["pdapUid"], {})
@Entity("product_diy_option_addprice", { schema: "makeshop" })
export class ProductDiyOptionAddprice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pdap_uid", unsigned: true })
  pdapUid: number;

  @Column("enum", {
    name: "pdap_cond_type",
    enum: ["", "fixed", "stock", "input"],
    default: () => "'fixed'",
  })
  pdapCondType: "" | "fixed" | "stock" | "input";

  @Column("varchar", { name: "pdap_name", length: 255 })
  pdapName: string;
}
