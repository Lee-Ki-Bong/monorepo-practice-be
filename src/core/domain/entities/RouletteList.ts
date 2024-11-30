import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_idx", ["rIdx"], {})
@Entity("roulette_list", { schema: "makeshop" })
export class RouletteList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "r_idx", unsigned: true })
  rIdx: number;

  @Column("varchar", { name: "r_title", length: 100 })
  rTitle: string;

  @Column("datetime", {
    name: "r_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rStartDate: Date;

  @Column("datetime", {
    name: "r_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rEndDate: Date;

  @Column("set", {
    name: "r_version",
    enum: ["PC", "MOBILE", "APP"],
    default: () => ["PC", "MOBILE", "APP"],
  })
  rVersion: ("PC" | "MOBILE" | "APP")[];

  @Column("enum", {
    name: "r_limit_type",
    enum: ["", "DAY", "PERIOD", "WEEK", "MONTH"],
    default: () => "'DAY'",
  })
  rLimitType: "" | "DAY" | "PERIOD" | "WEEK" | "MONTH";

  @Column("enum", {
    name: "r_benefit_setting",
    enum: ["", "AUTO", "BATCH"],
    default: () => "'AUTO'",
  })
  rBenefitSetting: "" | "AUTO" | "BATCH";

  @Column("datetime", {
    name: "r_batch_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rBatchDate: Date;

  @Column("enum", {
    name: "r_winning_percents_type",
    enum: ["", "AUTO", "DIRECT"],
    default: () => "'AUTO'",
  })
  rWinningPercentsType: "" | "AUTO" | "DIRECT";

  @Column("int", {
    name: "r_limit_count",
    unsigned: true,
    default: () => "'0'",
  })
  rLimitCount: number;

  @Column("enum", {
    name: "r_limit_action",
    enum: ["", "FAIL", "END"],
    default: () => "'FAIL'",
  })
  rLimitAction: "" | "FAIL" | "END";

  @Column("enum", {
    name: "r_member_limit_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rMemberLimitSetting: "" | "Y" | "N";

  @Column("varchar", { name: "r_member_list", length: 200 })
  rMemberList: string;

  @Column("enum", {
    name: "r_join_limit_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rJoinLimitSetting: "" | "Y" | "N";

  @Column("datetime", {
    name: "r_join_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rJoinStartDate: Date;

  @Column("datetime", {
    name: "r_join_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rJoinEndDate: Date;

  @Column("enum", {
    name: "r_order_limit_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rOrderLimitSetting: "" | "Y" | "N";

  @Column("datetime", {
    name: "r_order_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rOrderStartDate: Date;

  @Column("datetime", {
    name: "r_order_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rOrderEndDate: Date;

  @Column("enum", {
    name: "r_order_status",
    enum: ["", "S11", "D11", "D15", "D17", "D19"],
    default: () => "'S11'",
  })
  rOrderStatus: "" | "S11" | "D11" | "D15" | "D17" | "D19";

  @Column("enum", {
    name: "r_order_price_setting",
    enum: ["", "ORDER", "PRODUCT"],
    default: () => "'ORDER'",
  })
  rOrderPriceSetting: "" | "ORDER" | "PRODUCT";

  @Column("mediumtext", { name: "r_order_price_range" })
  rOrderPriceRange: string;

  @Column("enum", {
    name: "r_notice_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rNoticeSetting: "" | "Y" | "N";

  @Column("mediumtext", { name: "r_notice_text" })
  rNoticeText: string;

  @Column("enum", {
    name: "r_comment_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rCommentSetting: "" | "Y" | "N";

  @Column("enum", {
    name: "r_writer_setting",
    enum: ["", "ASSIGN", "ALL"],
    default: () => "'ASSIGN'",
  })
  rWriterSetting: "" | "ASSIGN" | "ALL";

  @Column("mediumint", {
    name: "r_writer_digit",
    unsigned: true,
    default: () => "'1'",
  })
  rWriterDigit: number;

  @Column("enum", {
    name: "r_winning_benefits_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rWinningBenefitsSetting: "" | "Y" | "N";

  @Column("enum", {
    name: "r_simple_comment_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rSimpleCommentSetting: "" | "Y" | "N";

  @Column("int", {
    name: "r_pc_design_id",
    unsigned: true,
    default: () => "'0'",
  })
  rPcDesignId: number;

  @Column("int", {
    name: "r_pc_dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  rPcDgnsetId: number;

  @Column("int", {
    name: "r_mobile_design_id",
    unsigned: true,
    default: () => "'0'",
  })
  rMobileDesignId: number;

  @Column("int", {
    name: "r_mobile_dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  rMobileDgnsetId: number;

  @Column("char", {
    name: "r_rolling_design_type",
    length: 1,
    default: () => "'1'",
  })
  rRollingDesignType: string;

  @Column("enum", {
    name: "r_product_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rProductSetting: "" | "Y" | "N";

  @Column("mediumtext", { name: "r_product_list", nullable: true })
  rProductList: string | null;

  @Column("enum", {
    name: "r_order_product_setting",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  rOrderProductSetting: "" | "Y" | "N";

  @Column("mediumtext", { name: "r_order_product_list" })
  rOrderProductList: string;

  @Column("datetime", {
    name: "r_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rRegDate: Date;

  @Column("datetime", {
    name: "r_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rModDate: Date;

  @Column("int", { name: "r_part_cnt", unsigned: true, default: () => "'0'" })
  rPartCnt: number;
}
