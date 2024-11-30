import { Column, Entity } from "typeorm";

@Entity("user_shoppay", { schema: "makeshop" })
export class UserShoppay {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "pay_authkey", length: 255 })
  payAuthkey: string;

  @Column("varchar", { primary: true, name: "pay_paykey", length: 255 })
  payPaykey: string;

  @Column("enum", {
    name: "pay_type",
    enum: ["", "01", "26"],
    default: () => "'01'",
  })
  payType: "" | "01" | "26";

  @Column("char", { name: "pay_code", length: 3 })
  payCode: string;

  @Column("varchar", { name: "pay_number", length: 20 })
  payNumber: string;

  @Column("varchar", { name: "pay_name", length: 20 })
  payName: string;

  @Column("varchar", { name: "pay_nickname", length: 20 })
  payNickname: string;

  @Column("varchar", { name: "pay_image", length: 255 })
  payImage: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "1", "2"],
    default: () => "'1'",
  })
  payStatus: "" | "1" | "2";

  @Column("smallint", {
    name: "pay_sort",
    unsigned: true,
    default: () => "'0'",
  })
  paySort: number;

  @Column("enum", {
    name: "pay_main_card",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  payMainCard: "" | "Y" | "N";

  @Column("varchar", { name: "pay_cardtype", length: 10, default: () => "'N'" })
  payCardtype: string;

  @Column("char", { name: "pay_limit", length: 2 })
  payLimit: string;

  @Column("datetime", {
    name: "pay_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payRegDate: Date;

  @Column("datetime", {
    name: "pay_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  payModDate: Date;
}
