import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Index("ordernum", ["ordernum"], {})
@Index("receiver", ["adminuser", "receiver"], {})
@Index("sender", ["adminuser", "sender"], {})
@Entity("temporderinfo", { schema: "makeshop" })
export class Temporderinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("enum", {
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY";

  @Column("enum", {
    name: "mem_language",
    enum: ["", "kor", "eng"],
    default: () => "'kor'",
  })
  memLanguage: "" | "kor" | "eng";

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("bigint", { name: "barcode", nullable: true })
  barcode: string | null;

  @Column("varchar", { name: "place", nullable: true, length: 150 })
  place: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("char", { name: "paymethod", nullable: true, length: 1 })
  paymethod: string | null;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("char", { name: "re_paymethod", length: 1 })
  rePaymethod: string;

  @Column("varchar", { name: "paydata", nullable: true, length: 60 })
  paydata: string | null;

  @Column("varchar", { name: "bank_date", nullable: true, length: 14 })
  bankDate: string | null;

  @Column("varchar", {
    name: "card_flag",
    nullable: true,
    length: 8,
    default: () => "'N'",
  })
  cardFlag: string | null;

  @Column("varchar", { name: "card_ok_num", nullable: true, length: 30 })
  cardOkNum: string | null;

  @Column("char", {
    name: "admin_card_flag",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminCardFlag: string | null;

  @Column("varchar", { name: "sender", nullable: true, length: 30 })
  sender: string | null;

  @Column("varchar", { name: "receiver", nullable: true, length: 30 })
  receiver: string | null;

  @Column("char", {
    name: "delivery",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  delivery: string | null;

  @Column("char", { name: "deli_com", nullable: true, length: 3 })
  deliCom: string | null;

  @Column("varchar", { name: "deli_num", nullable: true, length: 32 })
  deliNum: string | null;

  @Column("varchar", { name: "deli_date", nullable: true, length: 14 })
  deliDate: string | null;

  @Column("datetime", { name: "hope_deli_s_date", nullable: true })
  hopeDeliSDate: Date | null;

  @Column("datetime", { name: "hope_deli_e_date", nullable: true })
  hopeDeliEDate: Date | null;

  @Column("varchar", { name: "emergency", nullable: true, length: 30 })
  emergency: string | null;

  @Column("varchar", { name: "emergency2", nullable: true, length: 30 })
  emergency2: string | null;

  @Column("varchar", { name: "emergency3", nullable: true, length: 30 })
  emergency3: string | null;

  @Column("int", { name: "price", nullable: true })
  price: number | null;

  @Column("int", { name: "cal_price", default: () => "'0'" })
  calPrice: number;

  @Column("int", { name: "in_price", default: () => "'0'" })
  inPrice: number;

  @Column("int", { name: "in_card_price", default: () => "'0'" })
  inCardPrice: number;

  @Column("int", { name: "st_price", default: () => "'0'" })
  stPrice: number;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("varchar", {
    name: "dc_price",
    nullable: true,
    length: 9,
    default: () => "'0'",
  })
  dcPrice: string | null;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("varchar", { name: "pojangji", nullable: true, length: 100 })
  pojangji: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("char", {
    name: "del",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  del: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "link_id", nullable: true, length: 12 })
  linkId: string | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("enum", {
    name: "b2b_order",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  b2bOrder: "" | "N" | "Y";

  @Column("mediumtext", { name: "order_add_info", nullable: true })
  orderAddInfo: string | null;

  @Column("varchar", { name: "ems_code", length: 10 })
  emsCode: string;

  @Column("bigint", {
    name: "ems_insurance",
    unsigned: true,
    default: () => "'0'",
  })
  emsInsurance: string;

  @Column("int", { name: "add_dc_price", default: () => "'0'" })
  addDcPrice: number;
}
