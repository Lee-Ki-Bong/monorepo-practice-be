import { Column, Entity } from "typeorm";

@Entity("nhn_mileage", { schema: "makeshop" })
export class NhnMileage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "mileage_use",
    enum: ["", "Y", "N", "H"],
    default: () => "'N'",
  })
  mileageUse: "" | "Y" | "N" | "H";

  @Column("enum", {
    name: "mobile_mileage_use",
    enum: ["", "Y", "N", "H"],
    default: () => "'N'",
  })
  mobileMileageUse: "" | "Y" | "N" | "H";

  @Column("enum", {
    name: "mileage_ver",
    enum: ["", "v1", "v2", "vt"],
    default: () => "'v2'",
  })
  mileageVer: "" | "v1" | "v2" | "vt";

  @Column("varchar", { name: "api_id", length: 255 })
  apiId: string;

  @Column("varchar", { name: "api_secret", length: 255 })
  apiSecret: string;

  @Column("float", { name: "accumrate", precision: 12, default: () => "'0'" })
  accumrate: number;

  @Column("float", {
    name: "add_accumrate",
    precision: 12,
    default: () => "'0'",
  })
  addAccumrate: number;

  @Column("datetime", {
    name: "accumrate_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  accumrateDate: Date;

  @Column("text", { name: "allow_ip" })
  allowIp: string;

  @Column("text", { name: "deny_uid" })
  denyUid: string;

  @Column("text", { name: "deny_category" })
  denyCategory: string;

  @Column("enum", {
    name: "mileage_target",
    enum: ["", "PRICE", "REALPRICE"],
    default: () => "'PRICE'",
  })
  mileageTarget: "" | "PRICE" | "REALPRICE";

  @Column("enum", {
    name: "mileage_target_opt",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  mileageTargetOpt: "" | "Y" | "N";

  @Column("enum", {
    name: "btn_type",
    enum: ["", "A", "B"],
    default: () => "'A'",
  })
  btnType: "" | "A" | "B";

  @Column("enum", {
    name: "benefit_duplicate",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  benefitDuplicate: "" | "Y" | "N";

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
