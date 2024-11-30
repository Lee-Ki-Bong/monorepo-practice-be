import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pl_uid", ["plUid"], {})
@Index("ordernum", ["adminuser", "ordernum", "service"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("order_point_log", { schema: "makeshop" })
export class OrderPointLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "pt_uid",
    unsigned: true,
    default: () => "'0'",
  })
  ptUid: number;

  @Column("varchar", { name: "pt_trans_no", nullable: true, length: 30 })
  ptTransNo: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "pl_uid", unsigned: true })
  plUid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "service", length: 10 })
  service: string;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "pl_price", default: () => "'0'" })
  plPrice: number;

  @Column("enum", {
    name: "pl_action",
    enum: ["", "CANCEL", "USE"],
    default: () => "'USE'",
  })
  plAction: "" | "CANCEL" | "USE";

  @Column("varchar", { name: "pl_pay_data", length: 255 })
  plPayData: string;

  @Column("datetime", { name: "pl_date_insert", nullable: true })
  plDateInsert: Date | null;

  @Column("enum", {
    name: "auth_type",
    enum: ["", "CARD", "PHONE"],
    default: () => "'CARD'",
  })
  authType: "" | "CARD" | "PHONE";
}
