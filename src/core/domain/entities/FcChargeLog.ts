import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Index("change_id", ["changeId"], {})
@Entity("fc_charge_log", { schema: "makeshop" })
export class FcChargeLog {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumint", {
    name: "cur_charge",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  curCharge: number | null;

  @Column("mediumint", {
    name: "chg_charge",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  chgCharge: number | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
