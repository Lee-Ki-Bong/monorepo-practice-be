import { Column, Entity, Index } from "typeorm";

@Index("expire_date", ["adminuser", "expireDate"], {})
@Index("receive_type", ["adminuser", "receiveType"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("reserve_status", ["adminuser", "reserveStatus"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("smart_reserve_2023", { schema: "makeshop" })
export class SmartReserve_2023 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "reserve_rid", length: 20 })
  reserveRid: string;

  @Column("varchar", { name: "reservenum", length: 8 })
  reservenum: string;

  @Column("int", { name: "apply_rid", unsigned: true, default: () => "'0'" })
  applyRid: number;

  @Column("varchar", { name: "apply_code", length: 50 })
  applyCode: string;

  @Column("varchar", { name: "group_uid", length: 10, default: () => "'0'" })
  groupUid: string;

  @Column("char", { name: "display_type", length: 1, default: () => "'Y'" })
  displayType: string;

  @Column("varchar", {
    name: "receive_type",
    length: 10,
    default: () => "'SAVE'",
  })
  receiveType: string;

  @Column("char", { name: "reserve_status", length: 1, default: () => "'Y'" })
  reserveStatus: string;

  @Column("int", { name: "receive_price", default: () => "'0'" })
  receivePrice: number;

  @Column("int", { name: "rest_price", default: () => "'0'" })
  restPrice: number;

  @Column("varchar", { name: "reserve_name", length: 255 })
  reserveName: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "usable_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  usableDate: Date;

  @Column("datetime", {
    name: "expire_date",
    default: () => "'9999-12-31 23:59:59'",
  })
  expireDate: Date;

  @Column("datetime", {
    name: "finish_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  finishDate: Date;

  @Column("varchar", { name: "match_type", length: 20 })
  matchType: string;

  @Column("varchar", { name: "match_key", length: 30 })
  matchKey: string;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;

  @Column("longtext", { name: "addinfo", nullable: true })
  addinfo: string | null;
}
