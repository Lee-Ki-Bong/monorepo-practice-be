import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pdao_uid", ["pdaoUid"], {})
@Entity("product_diy_option_addoption", { schema: "makeshop" })
export class ProductDiyOptionAddoption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "pdao_uid", unsigned: true })
  pdaoUid: number;

  @Column("enum", {
    name: "pdao_mandatory",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  pdaoMandatory: "" | "N" | "Y";

  @Column("varchar", { name: "pdao_name", length: 255 })
  pdaoName: string;

  @Column("mediumtext", { name: "pdao_value" })
  pdaoValue: string;
}
