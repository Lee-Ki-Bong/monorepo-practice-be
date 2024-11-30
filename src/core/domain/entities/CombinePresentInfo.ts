import { Column, Entity, Index } from "typeorm";

@Index("admin_combine_date", ["adminuser", "combineDate"], {})
@Index("ordernum", ["adminuser", "ordernum", "combineDate"], { unique: true })
@Index("use_present_time", ["adminuser", "usePresentTime"], {})
@Entity("combine_present_info", { schema: "makeshop" })
export class CombinePresentInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "present_num", length: 13 })
  presentNum: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "sender_id", nullable: true, length: 20 })
  senderId: string | null;

  @Column("varchar", { name: "sender_name", nullable: true, length: 30 })
  senderName: string | null;

  @Column("datetime", {
    name: "sender_time",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  senderTime: Date | null;

  @Column("varchar", { name: "receiver_id", length: 20 })
  receiverId: string;

  @Column("varchar", { name: "receiver_name", length: 30 })
  receiverName: string;

  @Column("varchar", { name: "receiver_mobile", nullable: true, length: 20 })
  receiverMobile: string | null;

  @Column("datetime", {
    name: "receiver_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  receiverTime: Date;

  @Column("datetime", {
    name: "use_present_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  usePresentTime: Date;

  @Column("datetime", {
    name: "refuse_time",
    default: () => "'0000-00-00 00:00:00'",
  })
  refuseTime: Date;

  @Column("char", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("date", { name: "approval_enddate", default: () => "'0000-00-00'" })
  approvalEnddate: string;

  @Column("mediumtext", { name: "present_msg", nullable: true })
  presentMsg: string | null;

  @Column("datetime", {
    primary: true,
    name: "combine_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  combineDate: Date;
}
