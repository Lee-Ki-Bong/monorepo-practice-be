import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_offline_uid", ["offlineUid"], {})
@Entity("powerapp_offline_shop_info", { schema: "makeshop" })
export class PowerappOfflineShopInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "offline_uid", unsigned: true })
  offlineUid: number;

  @Column("varchar", { name: "offline_shopname", nullable: true, length: 255 })
  offlineShopname: string | null;

  @Column("time", {
    name: "offline_start_time",
    nullable: true,
    default: () => "'00:00:00'",
  })
  offlineStartTime: string | null;

  @Column("time", {
    name: "offline_end_time",
    nullable: true,
    default: () => "'00:00:00'",
  })
  offlineEndTime: string | null;

  @Column("varchar", { name: "offline_post", nullable: true, length: 20 })
  offlinePost: string | null;

  @Column("varchar", { name: "offline_address1", nullable: true, length: 120 })
  offlineAddress1: string | null;

  @Column("varchar", { name: "offline_address2", nullable: true, length: 120 })
  offlineAddress2: string | null;

  @Column("varchar", { name: "lat", nullable: true, length: 20 })
  lat: string | null;

  @Column("varchar", { name: "lng", nullable: true, length: 20 })
  lng: string | null;

  @Column("enum", {
    name: "use_state",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useState: "" | "N" | "Y";

  @Column("datetime", {
    name: "ins_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("enum", {
    name: "del_state",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  delState: "" | "N" | "Y";
}
