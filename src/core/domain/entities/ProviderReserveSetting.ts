import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("status_info", ["adminuser", "startDate", "endDate", "status"], {})
@Entity("provider_reserve_setting", { schema: "makeshop" })
export class ProviderReserveSetting {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "provider", length: 5 })
  provider: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("enum", {
    name: "reserve_chk",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  reserveChk: "" | "Y" | "N";

  @Column("enum", {
    name: "reserve_unit_type",
    enum: ["", "won", "percent"],
    default: () => "'won'",
  })
  reserveUnitType: "" | "won" | "percent";

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("int", { name: "reserve_cid", default: () => "'0'" })
  reserveCid: number;

  @Column("enum", {
    name: "mobile_reserve_unit_type",
    enum: ["", "won", "percent"],
    default: () => "'won'",
  })
  mobileReserveUnitType: "" | "won" | "percent";

  @Column("int", { name: "mobile_reserve", nullable: true })
  mobileReserve: number | null;

  @Column("int", { name: "mobile_reserve_cid", default: () => "'0'" })
  mobileReserveCid: number;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  status: "" | "Y" | "N";

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("varchar", { name: "reg_idx", nullable: true, length: 20 })
  regIdx: string | null;
}
