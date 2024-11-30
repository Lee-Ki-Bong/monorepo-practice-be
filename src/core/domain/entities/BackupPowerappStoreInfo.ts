import { Column, Entity } from "typeorm";

@Entity("backup_powerapp_store_info", { schema: "makeshop" })
export class BackupPowerappStoreInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "app_name", length: 20 })
  appName: string;

  @Column("varchar", { name: "store_name", length: 100 })
  storeName: string;

  @Column("varchar", { name: "short_info", length: 250 })
  shortInfo: string;

  @Column("mediumtext", { name: "desc_info", nullable: true })
  descInfo: string | null;

  @Column("varchar", { name: "screenshot_chk", length: 20 })
  screenshotChk: string;

  @Column("varchar", { name: "screenshot_ios_chk", length: 20 })
  screenshotIosChk: string;

  @Column("varchar", { name: "screenshot_iphonex_chk", length: 20 })
  screenshotIphonexChk: string;

  @Column("varchar", { name: "screenshot_ipad_chk", length: 20 })
  screenshotIpadChk: string;

  @Column("datetime", {
    name: "last_update_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastUpdateRegdate: Date;
}
