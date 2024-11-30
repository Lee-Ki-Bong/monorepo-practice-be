import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_dgntimer_id", ["dgntimerId"], {})
@Entity("neodesign_timer", { schema: "makeshop" })
export class NeodesignTimer {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "device_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  deviceType: "" | "PC" | "MOBILE";

  @Column("int", {
    primary: true,
    name: "dgnsche_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnscheId: number;

  @PrimaryGeneratedColumn({
    type: "mediumint",
    name: "dgntimer_id",
    unsigned: true,
  })
  dgntimerId: number;

  @Column("int", { name: "dgnset_id", unsigned: true, default: () => "'0'" })
  dgnsetId: number;

  @Column("date", {
    name: "dgntimer_doing_date",
    default: () => "'0000-00-00'",
  })
  dgntimerDoingDate: string;

  @Column("char", {
    name: "dgntimer_doing_time",
    length: 2,
    default: () => "'00'",
  })
  dgntimerDoingTime: string;

  @Column("datetime", {
    name: "dgntimer_lastdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgntimerLastdate: Date;

  @Column("datetime", {
    name: "dgntimer_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgntimerRegisterDate: Date;
}
