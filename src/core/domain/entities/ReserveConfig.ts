import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("reserve_type", ["adminuser", "useType", "customType", "display"], {})
@Entity("reserve_config", { schema: "makeshop" })
export class ReserveConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "custom_type", length: 50 })
  customType: string;

  @Column("enum", {
    name: "use_type",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  useType: "" | "YES" | "NO" | null;

  @Column("enum", {
    name: "display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  display: "" | "YES" | "NO";

  @Column("varchar", { name: "reserve_title", length: 100 })
  reserveTitle: string;

  @Column("varchar", {
    name: "apply_type",
    length: 10,
    default: () => "'ADD_DATE'",
  })
  applyType: string;

  @Column("varchar", {
    name: "expire_type",
    length: 10,
    default: () => "'DATE'",
  })
  expireType: string;

  @Column("varchar", {
    name: "start_day",
    length: 10,
    default: () => "'0000000000'",
  })
  startDay: string;

  @Column("varchar", {
    name: "expire_day",
    length: 10,
    default: () => "'0000000000'",
  })
  expireDay: string;

  @Column("enum", {
    name: "reserve_unit_type",
    enum: ["", "won", "percent"],
    default: () => "'won'",
  })
  reserveUnitType: "" | "won" | "percent";

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("enum", {
    name: "cut",
    nullable: true,
    enum: ["", "none", "round", "floor", "ceil"],
    default: () => "'none'",
  })
  cut: "" | "none" | "round" | "floor" | "ceil" | null;

  @Column("enum", {
    name: "dan",
    nullable: true,
    enum: ["", "0", "1", "0.1", "0.01"],
    default: () => "'0'",
  })
  dan: "" | "0" | "1" | "0.1" | "0.01" | null;

  @Column("varchar", {
    name: "apply_user_type",
    length: 10,
    default: () => "'NO_LIMIT'",
  })
  applyUserType: string;

  @Column("int", { name: "all_count", default: () => "'0'" })
  allCount: number;

  @Column("int", { name: "id_count", default: () => "'0'" })
  idCount: number;

  @Column("enum", {
    name: "down_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  downReserve: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
