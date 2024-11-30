import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("expire_date", ["adminuser", "userId", "productUid", "expireDate"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("rebuy_order", ["adminuser", "ordernum", "basketNum"], { unique: true })
@Index(
  "sale_start_date",
  ["adminuser", "userId", "productUid", "saleStartDate"],
  {}
)
@Entity("rebuy_order", { schema: "makeshop" })
export class RebuyOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", { name: "ref_uid", unsigned: true, default: () => "'0'" })
  refUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "sale_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  saleStartDate: Date;

  @Column("datetime", {
    name: "expire_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  expireDate: Date;

  @Column("int", { name: "rebuy_period", unsigned: true, default: () => "'0'" })
  rebuyPeriod: number;

  @Column("enum", {
    name: "sms_send",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsSend: "" | "Y" | "N";

  @Column("datetime", {
    name: "sms_send_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  smsSendDate: Date;
}
