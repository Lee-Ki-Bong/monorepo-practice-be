import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_idx", ["adminuser", "paypath"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("custom_momq_oo_order_check", { schema: "makeshop" })
export class CustomMomqOoOrderCheck {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "paypath",
    enum: ["", "pc", "mo"],
    default: () => "'pc'",
  })
  paypath: "" | "pc" | "mo";

  @Column("varchar", { name: "orderdate", length: 20 })
  orderdate: string;
}
