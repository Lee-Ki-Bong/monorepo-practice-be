import { Column, Entity, Index } from "typeorm";

@Index("index_order_date", ["adminuser", "subsOrderDate"], {})
@Index("index_subs_id", ["adminuser", "subsId"], {})
@Index("index_user_id", ["adminuser", "userId"], {})
@Entity("oo_subs", { schema: "makeshop" })
export class OoSubs {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("int", { name: "subs_id", unsigned: true, default: () => "'0'" })
  subsId: number;

  @Column("int", { name: "subs_pid", unsigned: true, default: () => "'0'" })
  subsPid: number;

  @Column("enum", {
    name: "subs_type",
    enum: ["", "SUBS", "ONCE"],
    default: () => "'SUBS'",
  })
  subsType: "" | "SUBS" | "ONCE";

  @Column("int", { name: "subs_turn", unsigned: true, default: () => "'0'" })
  subsTurn: number;

  @Column("date", { name: "subs_date", default: () => "'0000-00-00'" })
  subsDate: string;

  @Column("datetime", {
    name: "subs_order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  subsOrderDate: Date;
}
