import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_large_num", ["largeNum"], {})
@Entity("large_order", { schema: "makeshop" })
export class LargeOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "large_num", unsigned: true })
  largeNum: number;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

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

  @Column("varchar", { name: "group_id", length: 4 })
  groupId: string;

  @Column("int", { name: "cal_price", default: () => "'0'" })
  calPrice: number;

  @Column("int", { name: "deli_price", default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "used_emoney", default: () => "'0'" })
  usedEmoney: number;

  @Column("int", { name: "used_reserve", default: () => "'0'" })
  usedReserve: number;

  @Column("char", { name: "paymethod", length: 1 })
  paymethod: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "Y", "N", "D", "T"],
    default: () => "'N'",
  })
  payStatus: "" | "Y" | "N" | "D" | "T";

  @Column("varchar", { name: "banker", length: 40 })
  banker: string;

  @Column("varchar", { name: "bank_account", length: 255 })
  bankAccount: string;

  @Column("varchar", { name: "bank_name", length: 40 })
  bankName: string;

  @Column("varchar", { name: "sender", length: 30 })
  sender: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "mobile", length: 30 })
  mobile: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE";
}
