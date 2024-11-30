import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ordernum", ["adminuser", "ordernum"], {})
@Entity("oo_offer_msg", { schema: "makeshop" })
export class OoOfferMsg {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("int", {
    name: "prd_option_uid",
    unsigned: true,
    default: () => "'0'",
  })
  prdOptionUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("enum", {
    name: "source_type",
    enum: ["", "MAKESHOP", "SELLPIA"],
    default: () => "'MAKESHOP'",
  })
  sourceType: "" | "MAKESHOP" | "SELLPIA";

  @Column("varchar", { name: "msg_type", length: 20 })
  msgType: string;

  @Column("varchar", { name: "msg", length: 255 })
  msg: string;
}
