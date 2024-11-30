import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("sms_ordersend", { schema: "makeshop" })
export class SmsOrdersend {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "senddate",
    nullable: true,
    enum: ["", "1", "6", "12", "24"],
    default: () => "'6'",
  })
  senddate: "" | "1" | "6" | "12" | "24" | null;

  @Column("varchar", {
    name: "setdate",
    nullable: true,
    length: 4,
    default: () => "'YNNY'",
  })
  setdate: string | null;

  @Column("varchar", {
    name: "setdata",
    nullable: true,
    length: 8,
    default: () => "'NNYYYYNN'",
  })
  setdata: string | null;

  @Column("enum", {
    name: "datedisplay",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  datedisplay: "" | "Y" | "N" | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("varchar", { name: "phone0", nullable: true, length: 13 })
  phone0: string | null;

  @Column("varchar", { name: "phone1", nullable: true, length: 13 })
  phone1: string | null;

  @Column("varchar", { name: "phone2", nullable: true, length: 13 })
  phone2: string | null;

  @Column("varchar", { name: "phone3", nullable: true, length: 13 })
  phone3: string | null;

  @Column("varchar", { name: "phone4", nullable: true, length: 13 })
  phone4: string | null;

  @Column("enum", {
    name: "lms_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  lmsType: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "send_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  sendType: "" | "Y" | "N" | null;
}
