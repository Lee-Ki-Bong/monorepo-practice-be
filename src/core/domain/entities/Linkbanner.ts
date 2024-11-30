import { Column, Entity } from "typeorm";

@Entity("linkbanner", { schema: "makeshop" })
export class Linkbanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "linkprice", nullable: true, length: 12 })
  linkprice: string | null;

  @Column("varchar", { name: "ilikeclick", nullable: true, length: 12 })
  ilikeclick: string | null;

  @Column("varchar", { name: "pluslink", nullable: true, length: 12 })
  pluslink: string | null;

  @Column("varchar", { name: "prmax", nullable: true, length: 12 })
  prmax: string | null;

  @Column("varchar", { name: "overture", nullable: true, length: 12 })
  overture: string | null;

  @Column("varchar", { name: "daumclick", nullable: true, length: 50 })
  daumclick: string | null;

  @Column("varchar", { name: "kakaopixelid", nullable: true, length: 30 })
  kakaopixelid: string | null;

  @Column("enum", {
    name: "kakaonpay",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  kakaonpay: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "kakao_talk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  kakaoTalk: "" | "Y" | "N";

  @Column("varchar", { name: "newoverture", nullable: true, length: 30 })
  newoverture: string | null;

  @Column("char", {
    name: "newoverturetype",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  newoverturetype: string | null;

  @Column("varchar", { name: "google", nullable: true, length: 12 })
  google: string | null;

  @Column("varchar", { name: "google_label", nullable: true, length: 20 })
  googleLabel: string | null;

  @Column("varchar", { name: "facebook", nullable: true, length: 20 })
  facebook: string | null;

  @Column("varchar", { name: "advertiser_token", nullable: true, length: 100 })
  advertiserToken: string | null;

  @Column("enum", {
    name: "advertiser_cps",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  advertiserCps: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "advertiser_cancps",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  advertiserCancps: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "advertiser_cpa",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  advertiserCpa: "" | "Y" | "N" | null;

  @Column("varchar", {
    name: "facebook_conversion_cart_id",
    nullable: true,
    length: 20,
  })
  facebookConversionCartId: string | null;

  @Column("varchar", {
    name: "facebook_conversion_join_id",
    nullable: true,
    length: 20,
  })
  facebookConversionJoinId: string | null;

  @Column("varchar", { name: "facebook_pixel_id", nullable: true, length: 20 })
  facebookPixelId: string | null;

  @Column("varchar", {
    name: "facebook_pixel_action",
    nullable: true,
    length: 150,
  })
  facebookPixelAction: string | null;

  @Column("enum", {
    name: "facebook_auto_set",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  facebookAutoSet: "" | "Y" | "N";

  @Column("enum", {
    name: "facebook_pixel_s2s",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  facebookPixelS2s: "" | "Y" | "N";

  @Column("enum", {
    name: "facebook_pixel_capi",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  facebookPixelCapi: "" | "Y" | "N";

  @Column("mediumtext", { name: "facebook_pixel_token", nullable: true })
  facebookPixelToken: string | null;

  @Column("varchar", {
    name: "external_business_id",
    nullable: true,
    length: 50,
  })
  externalBusinessId: string | null;

  @Column("char", {
    name: "linkpricetype",
    nullable: true,
    length: 3,
    default: () => "'NNN'",
  })
  linkpricetype: string | null;

  @Column("enum", {
    name: "linkprice_naverpay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  linkpriceNaverpay: "" | "Y" | "N";

  @Column("char", {
    name: "overturetype",
    nullable: true,
    length: 2,
    default: () => "'NN'",
  })
  overturetype: string | null;

  @Column("varchar", { name: "criteoid", nullable: true, length: 50 })
  criteoid: string | null;

  @Column("varchar", { name: "criteotype", nullable: true, length: 7 })
  criteotype: string | null;

  @Column("enum", {
    name: "criteomoblie",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  criteomoblie: "" | "Y" | "N";

  @Column("enum", {
    name: "criteonpay",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  criteonpay: "" | "Y" | "N" | null;

  @Column("varchar", { name: "logrecoid", length: 50 })
  logrecoid: string;

  @Column("enum", {
    name: "logreco",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  logreco: "" | "Y" | "N";

  @Column("varchar", { name: "ebayid", nullable: true, length: 50 })
  ebayid: string | null;

  @Column("enum", {
    name: "ebaymoblie",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ebaymoblie: "" | "Y" | "N";

  @Column("varchar", { name: "ddnid", nullable: true, length: 50 })
  ddnid: string | null;

  @Column("varchar", { name: "ddnlabel", nullable: true, length: 50 })
  ddnlabel: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "target_view_id", nullable: true, length: 50 })
  targetViewId: string | null;

  @Column("enum", {
    name: "target_view_status",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  targetViewStatus: "" | "Y" | "N" | null;

  @Column("varchar", { name: "tgatesid", nullable: true, length: 50 })
  tgatesid: string | null;

  @Column("enum", {
    name: "tgates_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tgatesStatus: "" | "Y" | "N";

  @Column("varchar", { name: "krtid", nullable: true, length: 50 })
  krtid: string | null;

  @Column("enum", {
    name: "krt_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  krtStatus: "" | "Y" | "N";

  @Column("text", { name: "deny_code", nullable: true })
  denyCode: string | null;

  @Column("mediumtext", { name: "deny_uid", nullable: true })
  denyUid: string | null;

  @Column("mediumtext", { name: "nhn_s_deny_uid", nullable: true })
  nhnSDenyUid: string | null;

  @Column("mediumtext", { name: "nhn_s_deny_code", nullable: true })
  nhnSDenyCode: string | null;

  @Column("enum", {
    name: "nhn_s_image",
    enum: ["", "TINY", "MAX", "DEFAULT"],
    default: () => "'DEFAULT'",
  })
  nhnSImage: "" | "TINY" | "MAX" | "DEFAULT";

  @Column("varchar", { name: "mklaud_id", nullable: true, length: 20 })
  mklaudId: string | null;

  @Column("enum", {
    name: "mklaud_status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  mklaudStatus: "" | "N" | "Y";

  @Column("varchar", { name: "mklaud_iframe", nullable: true, length: 200 })
  mklaudIframe: string | null;

  @Column("varchar", { name: "mklaud_position", nullable: true, length: 200 })
  mklaudPosition: string | null;

  @Column("varchar", {
    name: "mklaud_page",
    nullable: true,
    length: 50,
    default: () => "'main'",
  })
  mklaudPage: string | null;

  @Column("varchar", { name: "adn_id", nullable: true, length: 50 })
  adnId: string | null;

  @Column("enum", {
    name: "adn_mobile",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  adnMobile: "" | "Y" | "N";

  @Column("varchar", { name: "realclick_id", length: 150 })
  realclickId: string;

  @Column("enum", {
    name: "realclick_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  realclickStatus: "" | "Y" | "N";

  @Column("varchar", { name: "mobon_userid", nullable: true, length: 30 })
  mobonUserid: string | null;

  @Column("varchar", { name: "mobon_code", nullable: true, length: 50 })
  mobonCode: string | null;

  @Column("mediumtext", { name: "nhn_event_title" })
  nhnEventTitle: string;

  @Column("varchar", { name: "event", nullable: true, length: 250 })
  event: string | null;

  @Column("int", { name: "cnt_limit", unsigned: true, default: () => "'0'" })
  cntLimit: number;

  @Column("enum", {
    name: "remind_pc",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  remindPc: "" | "Y" | "N";

  @Column("enum", {
    name: "remind_mobile",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  remindMobile: "" | "Y" | "N";

  @Column("varchar", { name: "daangn_id", nullable: true, length: 30 })
  daangnId: string | null;

  @Column("enum", {
    name: "daangn_npay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  daangnNpay: "" | "Y" | "N";

  @Column("enum", {
    name: "daangn_talk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  daangnTalk: "" | "Y" | "N";

  @Column("mediumtext", { name: "danawa_deny_code" })
  danawaDenyCode: string;

  @Column("mediumtext", { name: "danawa_deny_uid" })
  danawaDenyUid: string;

  @Column("varchar", { name: "tiktok_pixel_id", nullable: true, length: 30 })
  tiktokPixelId: string | null;

  @Column("enum", {
    name: "tiktok_npay",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tiktokNpay: "" | "Y" | "N";

  @Column("enum", {
    name: "tiktok_talk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  tiktokTalk: "" | "Y" | "N";
}
