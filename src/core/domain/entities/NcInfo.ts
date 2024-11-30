import { Column, Entity } from "typeorm";

@Entity("nc_info", { schema: "makeshop" })
export class NcInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "enable",
    enum: ["", "0", "1"],
    default: () => "'0'",
  })
  enable: "" | "0" | "1";

  @Column("enum", {
    name: "mobile_enable",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mobileEnable: "" | "Y" | "N";

  @Column("enum", {
    name: "nc_version",
    enum: ["", "1", "2"],
    default: () => "'1'",
  })
  ncVersion: "" | "1" | "2";

  @Column("varchar", { name: "nc_id", length: 50 })
  ncId: string;

  @Column("varchar", { name: "confirm_id", length: 50 })
  confirmId: string;

  @Column("varchar", { name: "button_id", nullable: true, length: 50 })
  buttonId: string | null;

  @Column("char", { name: "type", length: 1 })
  type: string;

  @Column("char", { name: "color", length: 1 })
  color: string;

  @Column("char", { name: "mobile_type", length: 2, default: () => "'MA'" })
  mobileType: string;

  @Column("char", { name: "mobile_color", length: 1, default: () => "'1'" })
  mobileColor: string;

  @Column("mediumtext", { name: "deny_code", nullable: true })
  denyCode: string | null;

  @Column("mediumtext", { name: "deny_uid", nullable: true })
  denyUid: string | null;

  @Column("enum", {
    name: "orbasket",
    enum: ["", "S", "N"],
    default: () => "'N'",
  })
  orbasket: "" | "S" | "N";

  @Column("enum", {
    name: "nhnorder",
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  nhnorder: "" | "Y" | "N" | "A";

  @Column("enum", {
    name: "nhnstock",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnstock: "" | "Y" | "N";

  @Column("enum", {
    name: "nhnreview",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnreview: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "nhnreview_content_replace_title",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnreviewContentReplaceTitle: "" | "Y" | "N";

  @Column("enum", {
    name: "nhnreview_board_title_content_replace",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnreviewBoardTitleContentReplace: "" | "Y" | "N";

  @Column("varchar", {
    name: "nhnreview_point_gen",
    nullable: true,
    length: 10,
  })
  nhnreviewPointGen: string | null;

  @Column("varchar", {
    name: "nhnreview_point_pre",
    nullable: true,
    length: 10,
  })
  nhnreviewPointPre: string | null;

  @Column("enum", {
    name: "nhnauth",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnauth: "" | "Y" | "N";

  @Column("enum", {
    name: "nhnreserve",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnreserve: "" | "Y" | "N";

  @Column("enum", {
    name: "nhncts",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  nhncts: "" | "Y" | "N";

  @Column("enum", {
    name: "nhndeli_delay",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  nhndeliDelay: "" | "Y" | "N";

  @Column("enum", {
    name: "nhncart",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  nhncart: "" | "Y" | "N";

  @Column("varchar", { name: "nhnlogimg1", nullable: true, length: 255 })
  nhnlogimg1: string | null;

  @Column("varchar", { name: "nhnlogimg2", nullable: true, length: 255 })
  nhnlogimg2: string | null;

  @Column("char", { name: "nhndelicom", nullable: true, length: 3 })
  nhndelicom: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("int", { name: "nhndeli_price", default: () => "'0'" })
  nhndeliPrice: number;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;

  @Column("enum", {
    name: "user_display_btn",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  userDisplayBtn: "" | "Y" | "N";

  @Column("datetime", {
    name: "nc_version_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  ncVersionUpdate: Date;

  @Column("char", {
    name: "nc_upgrade_request",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ncUpgradeRequest: string | null;
}
