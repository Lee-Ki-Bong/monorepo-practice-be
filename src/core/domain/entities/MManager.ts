import { Column, Entity } from "typeorm";

@Entity("m_manager", { schema: "makeshop" })
export class MManager {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 20 })
  subId: string;

  @Column("set", {
    name: "push_time",
    nullable: true,
    enum: ["06", "12", "18", "24"],
  })
  pushTime: ("06" | "12" | "18" | "24")[] | null;

  @Column("set", {
    name: "push_type",
    nullable: true,
    enum: ["JOIN", "ORDER", "BOARD"],
  })
  pushType: ("JOIN" | "ORDER" | "BOARD")[] | null;

  @Column("datetime", {
    name: "last_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastUpdateDate: Date;
}
