import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_bill_uid", ["billUid"], {})
@Entity("user_billing", { schema: "makeshop" })
export class UserBilling {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bill_uid" })
  billUid: number;

  @Column("varchar", { name: "bill_key", length: 255 })
  billKey: string;

  @Column("varchar", { name: "bill_req", length: 20 })
  billReq: string;

  @Column("enum", {
    name: "bill_use_pay",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  billUsePay: "" | "Y" | "N";

  @Column("varchar", { name: "bill_pg_name", length: 20 })
  billPgName: string;

  @Column("varchar", { name: "bill_pg_id", length: 255 })
  billPgId: string;

  @Column("char", { name: "bill_card_code", length: 2 })
  billCardCode: string;

  @Column("char", { name: "bill_card_kind", length: 1, default: () => "'0'" })
  billCardKind: string;

  @Column("varchar", { name: "bill_card_name", length: 20 })
  billCardName: string;

  @Column("varchar", { name: "bill_card_number", length: 4 })
  billCardNumber: string;

  @Column("enum", {
    name: "bill_status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  billStatus: "" | "N" | "Y";

  @Column("enum", {
    name: "bill_default",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  billDefault: "" | "Y" | "N";

  @Column("varchar", { name: "bill_message", length: 255 })
  billMessage: string;

  @Column("varchar", { name: "bill_code", length: 20 })
  billCode: string;

  @Column("varchar", { name: "bill_comment", length: 255 })
  billComment: string;

  @Column("datetime", {
    name: "bill_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  billDateInsert: Date;
}
