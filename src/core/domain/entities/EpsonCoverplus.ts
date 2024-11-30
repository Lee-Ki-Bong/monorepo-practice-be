import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ordernum", ["ordernum", "basketNum"], {})
@Index("user_id", ["userId", "msUid", "serialNum"], {})
@Entity("epson_coverplus", { schema: "makeshop" })
export class EpsonCoverplus {
  @PrimaryGeneratedColumn({ type: "int", name: "cp_uid", unsigned: true })
  cpUid: number;

  @Column("varchar", { name: "user_id", length: 50 })
  userId: string;

  @Column("int", { name: "ms_uid", unsigned: true, default: () => "'0'" })
  msUid: number;

  @Column("varchar", { name: "serial_num", length: 20 })
  serialNum: string;

  @Column("varchar", { name: "serial_key", length: 100 })
  serialKey: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("int", { name: "manage_count", unsigned: true, default: () => "'0'" })
  manageCount: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "product_addinfo", length: 255 })
  productAddinfo: string;

  @Column("varchar", { name: "coverplus_status", length: 10 })
  coverplusStatus: string;

  @Column("int", {
    name: "coverplus_period",
    unsigned: true,
    default: () => "'0'",
  })
  coverplusPeriod: number;

  @Column("date", { name: "apply_sdate", default: () => "'0000-00-00'" })
  applySdate: string;

  @Column("date", { name: "apply_edate", default: () => "'0000-00-00'" })
  applyEdate: string;

  @Column("enum", {
    name: "send_mail",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendMail: "" | "Y" | "N";

  @Column("enum", {
    name: "send_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendSms: "" | "Y" | "N";

  @Column("datetime", {
    name: "auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  authDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
