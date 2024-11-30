import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Entity("sms_reserve", { schema: "makeshop" })
export class SmsReserve {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumtext", { name: "add_where", nullable: true })
  addWhere: string | null;

  @Column("mediumtext", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "smstitle", nullable: true, length: 255 })
  smstitle: string | null;

  @Column("char", {
    name: "addmessage",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  addmessage: string | null;

  @Column("varchar", { name: "sendphone", nullable: true, length: 15 })
  sendphone: string | null;

  @Column("varchar", { name: "etcmessage", nullable: true, length: 255 })
  etcmessage: string | null;

  @Column("char", {
    name: "addmess",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  addmess: string | null;

  @Column("varchar", {
    name: "date",
    nullable: true,
    length: 30,
    default: () => "'0'",
  })
  date: string | null;

  @Column("varchar", {
    name: "malltalk_sms",
    nullable: true,
    length: 5,
    default: () => "'N'",
  })
  malltalkSms: string | null;

  @Column("varchar", {
    name: "alltel",
    nullable: true,
    length: 5,
    default: () => "'N'",
  })
  alltel: string | null;

  @Column("char", {
    name: "LMS",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lms: string | null;

  @Column("varchar", { primary: true, name: "senddate", length: 15 })
  senddate: string;

  @Column("enum", {
    name: "sendok",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sendok: "" | "Y" | "N" | null;

  @Column("int", { name: "usercnt", default: () => "'0'" })
  usercnt: number;

  @Column("int", { name: "sendokcnt", default: () => "'0'" })
  sendokcnt: number;

  @Column("int", { name: "malltalkcnt", default: () => "'0'" })
  malltalkcnt: number;

  @Column("char", {
    name: "sms_receive",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  smsReceive: string | null;
}
