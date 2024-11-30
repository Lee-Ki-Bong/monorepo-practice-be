import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("index_end_date", ["adminuser", "ppEndDate"], {})
@Index("index_start_date", ["adminuser", "ppStartDate"], {})
@Entity("payment_promotion_list", { schema: "makeshop" })
export class PaymentPromotionList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "pp_title", length: 255 })
  ppTitle: string;

  @Column("enum", {
    name: "pp_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ppStatus: "" | "Y" | "N";

  @Column("enum", {
    name: "pp_promotion_type",
    enum: ["", "FIRST", "UNLIMITED"],
    default: () => "'FIRST'",
  })
  ppPromotionType: "" | "FIRST" | "UNLIMITED";

  @Column("varchar", {
    name: "pp_paymethod",
    length: 255,
    default: () => "'ALL'",
  })
  ppPaymethod: string;

  @Column("set", {
    name: "pp_device",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  ppDevice: ("PC" | "MOBILE" | "APP")[];

  @Column("datetime", {
    name: "pp_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  ppStartDate: Date;

  @Column("datetime", {
    name: "pp_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  ppEndDate: Date;

  @Column("enum", {
    name: "pp_user",
    enum: ["", "ALL", "MEMBER"],
    default: () => "'ALL'",
  })
  ppUser: "" | "ALL" | "MEMBER";

  @Column("set", {
    name: "pp_benefit",
    enum: ["DISCOUNT", "RESERVE"],
    default: () => ["DISCOUNT"],
  })
  ppBenefit: ("DISCOUNT" | "RESERVE")[];

  @Column("enum", {
    name: "pp_discount_type",
    enum: ["", "PERCENT", "WON"],
    default: () => "'PERCENT'",
  })
  ppDiscountType: "" | "PERCENT" | "WON";

  @Column("smallint", {
    name: "pp_trim_unit",
    nullable: true,
    default: () => "'0'",
  })
  ppTrimUnit: number | null;

  @Column("enum", {
    name: "pp_trim_type",
    nullable: true,
    enum: ["", "ceil", "floor", "round"],
    default: () => "'ceil'",
  })
  ppTrimType: "" | "ceil" | "floor" | "round" | null;

  @Column("mediumtext", { name: "pp_benefit_info" })
  ppBenefitInfo: string;

  @Column("datetime", {
    name: "pp_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  ppRegDate: Date;

  @Column("datetime", {
    name: "pp_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  ppModDate: Date;
}
