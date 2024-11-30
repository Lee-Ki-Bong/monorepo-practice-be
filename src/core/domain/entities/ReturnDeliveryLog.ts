import { Column, Entity, Index } from "typeorm";

@Index("rd_code", ["adminuser", "rdCode"], {})
@Index("rd_delivery_num", ["adminuser", "returnDeliveryNum"], {})
@Entity("return_delivery_log", { schema: "makeshop" })
export class ReturnDeliveryLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("tinyint", { name: "rd_code", default: () => "'3'" })
  rdCode: number;

  @Column("varchar", { name: "cust_id", length: 50 })
  custId: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", { name: "sender", length: 30 })
  sender: string;

  @Column("varchar", { name: "sender_post", nullable: true, length: 10 })
  senderPost: string | null;

  @Column("varchar", { name: "sender_addr", length: 100 })
  senderAddr: string;

  @Column("varchar", { name: "sender_addr2", length: 100 })
  senderAddr2: string;

  @Column("varchar", { name: "receiver", length: 30 })
  receiver: string;

  @Column("varchar", { name: "receiver_post", nullable: true, length: 10 })
  receiverPost: string | null;

  @Column("varchar", { name: "receiver_addr", length: 100 })
  receiverAddr: string;

  @Column("varchar", { name: "receiver_addr2", length: 100 })
  receiverAddr2: string;

  @Column("varchar", { name: "applier", length: 10, default: () => "'ADMIN'" })
  applier: string;

  @Column("datetime", {
    name: "apply_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  applyDate: Date;

  @Column("varchar", {
    name: "return_delivery_num",
    nullable: true,
    length: 20,
  })
  returnDeliveryNum: string | null;

  @Column("char", {
    name: "return_delivery_status",
    nullable: true,
    length: 2,
    default: () => "'01'",
  })
  returnDeliveryStatus: string | null;

  @Column("varchar", { name: "request_memo", length: 255 })
  requestMemo: string;

  @Column("varchar", { name: "basket_nums", length: 100 })
  basketNums: string;

  @Column("mediumint", {
    name: "return_weight",
    unsigned: true,
    default: () => "'0'",
  })
  returnWeight: number;
}
