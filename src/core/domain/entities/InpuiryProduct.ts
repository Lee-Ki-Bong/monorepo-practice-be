import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_i_uid", ["iUid"], {})
@Entity("inpuiry_product", { schema: "makeshop" })
export class InpuiryProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "inpuiry_code", length: 20 })
  inpuiryCode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "i_uid" })
  iUid: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("enum", {
    name: "present_state",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  presentState: "" | "Y" | "N";

  @Column("datetime", {
    name: "last_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastUpdateDate: Date;
}
