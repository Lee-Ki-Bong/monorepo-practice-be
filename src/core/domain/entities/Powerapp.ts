import { Column, Entity } from "typeorm";

@Entity("powerapp", { schema: "makeshop" })
export class Powerapp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "use_down",
    enum: ["", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  useDown: "" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("varchar", { name: "down_benefit", nullable: true, length: 11 })
  downBenefit: string | null;

  @Column("enum", {
    name: "use_barcode",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useBarcode: "" | "YES" | "NO";

  @Column("enum", {
    name: "use_simple_join",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useSimpleJoin: "" | "YES" | "NO";

  @Column("enum", {
    name: "use_simple_review",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useSimpleReview: "" | "YES" | "NO";

  @Column("varchar", { name: "push_color", nullable: true, length: 6 })
  pushColor: string | null;

  @Column("enum", {
    name: "use_push",
    enum: ["", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  usePush: "" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("mediumint", {
    name: "push_receive_day",
    unsigned: true,
    default: () => "'0'",
  })
  pushReceiveDay: number;

  @Column("varchar", { name: "push_benefit", nullable: true, length: 11 })
  pushBenefit: string | null;

  @Column("enum", {
    name: "use_invitation",
    enum: ["", "NOT", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  useInvitation: "" | "NOT" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("varchar", { name: "invitation_benefit", nullable: true, length: 11 })
  invitationBenefit: string | null;

  @Column("smallint", {
    name: "invitation_number",
    unsigned: true,
    default: () => "'0'",
  })
  invitationNumber: number;

  @Column("enum", {
    name: "use_popup",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  usePopup: "" | "YES" | "NO";

  @Column("enum", {
    name: "reeket_ad",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  reeketAd: "" | "Y" | "N";

  @Column("enum", {
    name: "use_sd_buy",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useSdBuy: "" | "YES" | "NO";

  @Column("enum", {
    name: "sd_buy_type",
    enum: ["", "image", "text"],
    default: () => "'text'",
  })
  sdBuyType: "" | "image" | "text";

  @Column("enum", {
    name: "sd_buy_image",
    nullable: true,
    enum: ["jpg", "gif", "png", ""],
  })
  sdBuyImage: "jpg" | "gif" | "png" | "" | null;

  @Column("set", { name: "sd_buy_display", enum: ["QR", "SMS"] })
  sdBuyDisplay: ("QR" | "SMS")[];

  @Column("varchar", { name: "sd_buy_sms_text", length: 80 })
  sdBuySmsText: string;

  @Column("enum", {
    name: "use_alerton",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useAlerton: "" | "YES" | "NO";

  @Column("set", {
    name: "lang_display",
    nullable: true,
    enum: ["KR", "CN", "EN", "JP"],
  })
  langDisplay: ("KR" | "CN" | "EN" | "JP")[] | null;

  @Column("mediumtext", { name: "use_alerton_benefit", nullable: true })
  useAlertonBenefit: string | null;

  @Column("set", {
    name: "use_intro_index",
    enum: ["1", "2", "3"],
    default: () => ["1"],
  })
  useIntroIndex: ("1" | "2" | "3")[];

  @Column("enum", {
    name: "use_intro_effect",
    enum: [
      "",
      "EXPAND",
      "REDUCE",
      "DISAPPEAR",
      "SLIDE_UP",
      "SLIDE_DOWN",
      "SLIDE_LEFT",
      "SLIDE_RIGHT",
    ],
    default: () => "'DISAPPEAR'",
  })
  useIntroEffect:
    | ""
    | "EXPAND"
    | "REDUCE"
    | "DISAPPEAR"
    | "SLIDE_UP"
    | "SLIDE_DOWN"
    | "SLIDE_LEFT"
    | "SLIDE_RIGHT";

  @Column("varchar", { name: "update_date", length: 14 })
  updateDate: string;

  @Column("datetime", {
    name: "api_down_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  apiDownDate: Date | null;

  @Column("char", { name: "popup_choice", nullable: true, length: 1 })
  popupChoice: string | null;

  @Column("varchar", {
    name: "ios_version",
    nullable: true,
    length: 10,
    default: () => "'0.0.0'",
  })
  iosVersion: string | null;

  @Column("varchar", {
    name: "android_version",
    nullable: true,
    length: 10,
    default: () => "'0.0.0'",
  })
  androidVersion: string | null;

  @Column("varchar", { name: "ios_url", nullable: true, length: 255 })
  iosUrl: string | null;

  @Column("varchar", { name: "android_url", nullable: true, length: 255 })
  androidUrl: string | null;

  @Column("varchar", { name: "android_authcode", length: 255 })
  androidAuthcode: string;

  @Column("varchar", { name: "log_server_name", length: 10 })
  logServerName: string;

  @Column("varchar", { name: "popup_link1", nullable: true, length: 255 })
  popupLink1: string | null;

  @Column("varchar", { name: "popup_link2", nullable: true, length: 255 })
  popupLink2: string | null;

  @Column("varchar", { name: "popup_link3", nullable: true, length: 255 })
  popupLink3: string | null;

  @Column("varchar", { name: "popup_link4", nullable: true, length: 255 })
  popupLink4: string | null;

  @Column("varchar", { name: "popup_link5", nullable: true, length: 255 })
  popupLink5: string | null;

  @Column("enum", {
    name: "bottom_display",
    enum: ["", "YES", "NO", "GUIDE"],
    default: () => "'YES'",
  })
  bottomDisplay: "" | "YES" | "NO" | "GUIDE";

  @Column("enum", {
    name: "bottom_menu_height",
    nullable: true,
    enum: ["", "BASIC", "MIDDLE", "HIGH", "NONE"],
    default: () => "'NONE'",
  })
  bottomMenuHeight: "" | "BASIC" | "MIDDLE" | "HIGH" | "NONE" | null;

  @Column("enum", {
    name: "powerfolder_display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  powerfolderDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "powerfolder_type",
    enum: ["", "BASIC", "IMAGE"],
    default: () => "'BASIC'",
  })
  powerfolderType: "" | "BASIC" | "IMAGE";

  @Column("enum", {
    name: "powerfolder_rending",
    enum: ["", "B", "S", "SS"],
    default: () => "'B'",
  })
  powerfolderRending: "" | "B" | "S" | "SS";

  @Column("mediumtext", { name: "powerfolder_bg", nullable: true })
  powerfolderBg: string | null;

  @Column("mediumtext", { name: "use_powerfolder_list", nullable: true })
  usePowerfolderList: string | null;

  @Column("enum", {
    name: "menu_color",
    enum: ["", "DEFAULT", "BLACK", "WHITE", "GRAY"],
    default: () => "'BLACK'",
  })
  menuColor: "" | "DEFAULT" | "BLACK" | "WHITE" | "GRAY";

  @Column("enum", {
    name: "menu_title_color",
    enum: ["", "BLACK", "WHITE", "GRAY"],
    default: () => "'BLACK'",
  })
  menuTitleColor: "" | "BLACK" | "WHITE" | "GRAY";

  @Column("enum", {
    name: "menu_title_align",
    enum: ["", "CENTER", "LEFT"],
    default: () => "'CENTER'",
  })
  menuTitleAlign: "" | "CENTER" | "LEFT";

  @Column("enum", {
    name: "menu_user_info",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  menuUserInfo: "" | "Y" | "N";

  @Column("enum", {
    name: "slide_type",
    enum: ["", "HALF", "FULL"],
    default: () => "'FULL'",
  })
  slideType: "" | "HALF" | "FULL";

  @Column("enum", {
    name: "use_appiconclick",
    nullable: true,
    enum: ["", "BASIC", "MAIN"],
    default: () => "'BASIC'",
  })
  useAppiconclick: "" | "BASIC" | "MAIN" | null;

  @Column("enum", {
    name: "use_appnoticlick",
    nullable: true,
    enum: ["", "BASIC", "HISTORY"],
    default: () => "'BASIC'",
  })
  useAppnoticlick: "" | "BASIC" | "HISTORY" | null;

  @Column("mediumtext", { name: "use_button_list", nullable: true })
  useButtonList: string | null;

  @Column("enum", {
    name: "link_benefit_use",
    enum: ["", "Y", "N", "R"],
    default: () => "'N'",
  })
  linkBenefitUse: "" | "Y" | "N" | "R";

  @Column("enum", {
    name: "link_benefit_type",
    enum: ["", "DISCOUNT", "RESERVE", "FREEDELI", "POINT"],
    default: () => "'DISCOUNT'",
  })
  linkBenefitType: "" | "DISCOUNT" | "RESERVE" | "FREEDELI" | "POINT";

  @Column("enum", {
    name: "link_benefit_term",
    enum: ["", "DAY", "WEEK", "MONTH", "UNLIMIT"],
    default: () => "'DAY'",
  })
  linkBenefitTerm: "" | "DAY" | "WEEK" | "MONTH" | "UNLIMIT";

  @Column("smallint", {
    name: "link_benefit_count",
    unsigned: true,
    default: () => "'1'",
  })
  linkBenefitCount: number;

  @Column("smallint", {
    name: "link_benefit_floor_position",
    unsigned: true,
    default: () => "'0'",
  })
  linkBenefitFloorPosition: number;

  @Column("int", {
    name: "link_benefit_minimum_price",
    nullable: true,
    unsigned: true,
  })
  linkBenefitMinimumPrice: number | null;

  @Column("int", { name: "link_benefit_rate", nullable: true, unsigned: true })
  linkBenefitRate: number | null;

  @Column("enum", {
    name: "link_benefit_unit",
    nullable: true,
    enum: ["", "PRICE", "PERCENT", "MULTI"],
  })
  linkBenefitUnit: "" | "PRICE" | "PERCENT" | "MULTI" | null;

  @Column("datetime", {
    name: "link_benefit_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  linkBenefitDate: Date | null;

  @Column("mediumtext", { name: "link_benefit_period_set", nullable: true })
  linkBenefitPeriodSet: string | null;

  @Column("enum", {
    name: "related_benefit_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  relatedBenefitType: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "save_benefit_type",
    enum: ["", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  saveBenefitType: "" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("mediumint", {
    name: "save_benefit_day",
    unsigned: true,
    default: () => "'0'",
  })
  saveBenefitDay: number;

  @Column("varchar", { name: "save_benefit", nullable: true, length: 11 })
  saveBenefit: string | null;

  @Column("enum", {
    name: "install_encourage",
    enum: ["", "NO", "A", "B", "C"],
    default: () => "'NO'",
  })
  installEncourage: "" | "NO" | "A" | "B" | "C";

  @Column("smallint", {
    name: "install_move",
    unsigned: true,
    default: () => "'1'",
  })
  installMove: number;

  @Column("varchar", { name: "install_message", nullable: true, length: 255 })
  installMessage: string | null;

  @Column("mediumtext", { name: "install_detail", nullable: true })
  installDetail: string | null;

  @Column("mediumtext", { name: "install_btype_detail", nullable: true })
  installBtypeDetail: string | null;

  @Column("enum", {
    name: "use_offline_push",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  useOfflinePush: "" | "NO" | "YES";

  @Column("enum", {
    name: "use_keyword",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  useKeyword: "" | "YES" | "NO";

  @Column("smallint", {
    name: "use_intro_time",
    unsigned: true,
    default: () => "'2'",
  })
  useIntroTime: number;

  @Column("enum", {
    name: "send_form_type",
    enum: ["", "BASIC", "IMAGE_TYPE1"],
    default: () => "'BASIC'",
  })
  sendFormType: "" | "BASIC" | "IMAGE_TYPE1";
}
