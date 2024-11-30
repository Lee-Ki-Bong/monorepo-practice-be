import { Column, Entity } from "typeorm";

@Entity("subs_user_config", { schema: "makeshop" })
export class SubsUserConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 40 })
  userId: string;

  @Column("enum", {
    name: "suc_use_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sucUseCoupon: "" | "Y" | "N";

  @Column("enum", {
    name: "suc_use_reserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sucUseReserve: "" | "Y" | "N";

  @Column("enum", {
    name: "suc_use_emoney",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sucUseEmoney: "" | "Y" | "N";

  @Column("varchar", { name: "suc_etctype", length: 255 })
  sucEtctype: string;

  @Column("datetime", {
    name: "suc_date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  sucDateUpdate: Date;
}
