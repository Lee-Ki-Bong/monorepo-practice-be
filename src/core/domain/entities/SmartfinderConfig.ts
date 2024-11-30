import { Column, Entity } from "typeorm";

@Entity("smartfinder_config", { schema: "makeshop" })
export class SmartfinderConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "relation_search_word",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  relationSearchWord: "" | "N" | "Y";

  @Column("enum", {
    name: "save_search_word",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  saveSearchWord: "" | "N" | "Y";

  @Column("enum", {
    name: "auto_search_word",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  autoSearchWord: "" | "N" | "Y";

  @Column("enum", {
    name: "smartengine_pay",
    enum: ["", "NEW", "OLD"],
    default: () => "'NEW'",
  })
  smartenginePay: "" | "NEW" | "OLD";

  @Column("varchar", { name: "smartengine_pay_type", length: 5 })
  smartenginePayType: string;

  @Column("datetime", {
    name: "smartengine_startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  smartengineStartdate: Date;

  @Column("datetime", {
    name: "smartengine_enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  smartengineEnddate: Date;

  @Column("smallint", {
    name: "smartengine_cate_main",
    unsigned: true,
    default: () => "'0'",
  })
  smartengineCateMain: number;

  @Column("smallint", {
    name: "smartengine_cate_sub",
    unsigned: true,
    default: () => "'0'",
  })
  smartengineCateSub: number;

  @Column("varchar", { name: "smartengine_cate_sub_txt", length: 200 })
  smartengineCateSubTxt: string;

  @Column("enum", {
    name: "smartengine_cate_company",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  smartengineCateCompany: "" | "N" | "Y";

  @Column("smallint", {
    name: "smartengine_cate_age",
    unsigned: true,
    default: () => "'0'",
  })
  smartengineCateAge: number;

  @Column("smallint", {
    name: "smartengine_cate_sex",
    unsigned: true,
    default: () => "'0'",
  })
  smartengineCateSex: number;

  @Column("enum", {
    name: "sme_orderby",
    nullable: true,
    enum: ["", "SE", "MS"],
    default: () => "'SE'",
  })
  smeOrderby: "" | "SE" | "MS" | null;

  @Column("enum", {
    name: "sme_soldout_display",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  smeSoldoutDisplay: "" | "N" | "Y" | null;

  @Column("char", {
    name: "sme_preset",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  smePreset: string | null;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
