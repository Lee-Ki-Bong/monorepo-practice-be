import { Column, Entity, Index } from "typeorm";

@Index("rdate_idx", ["adminuser", "regDate"], {})
@Entity("oo_trade_log", { schema: "makeshop" })
export class OoTradeLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("int", { name: "old_num", unsigned: true, default: () => "'0'" })
  oldNum: number;

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date | null;
}
