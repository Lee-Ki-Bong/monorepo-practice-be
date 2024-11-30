import { Column, Entity } from "typeorm";

@Entity("m_info", { schema: "makeshop" })
export class MInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "m_use",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  mUse: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_intro_use",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mIntroUse: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_order",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  mOrder: "" | "NO" | "YES";

  @Column("enum", {
    name: "m_shopinfo",
    enum: ["", "VIEW", "HIDDEN"],
    default: () => "'VIEW'",
  })
  mShopinfo: "" | "VIEW" | "HIDDEN";

  @Column("enum", {
    name: "m_each_app",
    enum: ["", "NO", "YES"],
    default: () => "'NO'",
  })
  mEachApp: "" | "NO" | "YES";

  @Column("enum", {
    name: "m_join",
    nullable: true,
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  mJoin: "" | "YES" | "NO" | null;

  @Column("varchar", { name: "m_join_groupid", nullable: true, length: 4 })
  mJoinGroupid: string | null;

  @Column("varchar", { name: "m_logo", nullable: true, length: 50 })
  mLogo: string | null;

  @Column("varchar", { name: "m_shoptitle", nullable: true, length: 50 })
  mShoptitle: string | null;

  @Column("set", {
    name: "m_order_set",
    nullable: true,
    enum: [
      "BANK",
      "CARD",
      "VIRTUAL",
      "PHONE",
      "ESCROW",
      "PC",
      "KK",
      "KKP",
      "SP",
      "SSG",
      "STB",
      "SMP",
      "TOS",
      "NPY",
      "CHA",
      "SPY",
      "DSC",
      "AE",
      "OFF",
      "QTS",
    ],
  })
  mOrderSet:
    | (
        | "BANK"
        | "CARD"
        | "VIRTUAL"
        | "PHONE"
        | "ESCROW"
        | "PC"
        | "KK"
        | "KKP"
        | "SP"
        | "SSG"
        | "STB"
        | "SMP"
        | "TOS"
        | "NPY"
        | "CHA"
        | "SPY"
        | "DSC"
        | "AE"
        | "OFF"
        | "QTS"
      )[]
    | null;

  @Column("set", {
    name: "m_secure_type",
    nullable: true,
    enum: ["ORDER", "JOIN", "LOGIN"],
  })
  mSecureType: ("ORDER" | "JOIN" | "LOGIN")[] | null;

  @Column("enum", {
    name: "m_pc_order_view",
    enum: ["", "NONE", "MOBILE", "MOBILE_VIEW"],
    default: () => "'NONE'",
  })
  mPcOrderView: "" | "NONE" | "MOBILE" | "MOBILE_VIEW";

  @Column("enum", {
    name: "m_use_photogallery",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  mUsePhotogallery: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_use_malltalkbanner",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mUseMalltalkbanner: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_use_mainpopup",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mUseMainpopup: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_use_today_product",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mUseTodayProduct: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_frequent_category",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mFrequentCategory: "" | "YES" | "NO";

  @Column("varchar", { name: "m_each_banner", nullable: true, length: 20 })
  mEachBanner: string | null;

  @Column("varchar", { name: "m_each_eventimg", nullable: true, length: 20 })
  mEachEventimg: string | null;

  @Column("varchar", { name: "m_each_eventlink", nullable: true, length: 200 })
  mEachEventlink: string | null;

  @Column("char", { name: "m_maindisplay", length: 3, default: () => "'3,1'" })
  mMaindisplay: string;

  @Column("longtext", { name: "m_stats_script", nullable: true })
  mStatsScript: string | null;

  @Column("varchar", { name: "m_mobile_bg_color", nullable: true, length: 10 })
  mMobileBgColor: string | null;

  @Column("varchar", { name: "m_mobile_bg_img", nullable: true, length: 20 })
  mMobileBgImg: string | null;

  @Column("enum", {
    name: "m_event_orderby",
    enum: ["", "ENDDATE_DESC", "UID_DESC", "USER_DESC"],
    default: () => "'ENDDATE_DESC'",
  })
  mEventOrderby: "" | "ENDDATE_DESC" | "UID_DESC" | "USER_DESC";

  @Column("longtext", { name: "m_main_display_set", nullable: true })
  mMainDisplaySet: string | null;

  @Column("varchar", { name: "m_acecounter_code", length: 15 })
  mAcecounterCode: string;

  @Column("date", { name: "m_acecounter_end", default: () => "'0000-00-00'" })
  mAcecounterEnd: string;

  @Column("date", {
    name: "m_powerpack_enddate",
    default: () => "'0000-00-00'",
  })
  mPowerpackEnddate: string;

  @Column("date", { name: "m_powerpack_experience_date", nullable: true })
  mPowerpackExperienceDate: string | null;

  @Column("enum", {
    name: "m_powerpack_use_state",
    enum: ["", "NO", "NO_CHANGE", "CHANGE", "BACK"],
    default: () => "'NO'",
  })
  mPowerpackUseState: "" | "NO" | "NO_CHANGE" | "CHANGE" | "BACK";

  @Column("mediumtext", { name: "m_powerpack_active_popup", nullable: true })
  mPowerpackActivePopup: string | null;

  @Column("date", { name: "m_powerapp_enddate", default: () => "'0000-00-00'" })
  mPowerappEnddate: string;

  @Column("enum", {
    name: "m_powerapp_pay_state",
    enum: ["", "NO", "FREE", "PAY"],
    default: () => "'NO'",
  })
  mPowerappPayState: "" | "NO" | "FREE" | "PAY";

  @Column("enum", {
    name: "m_use_retarget",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mUseRetarget: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_del_pc_cookie",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  mDelPcCookie: "" | "YES" | "NO";

  @Column("enum", {
    name: "m_top_banner",
    enum: ["", "DEFAULT", "POWERAPP", "INSTALL"],
    default: () => "'DEFAULT'",
  })
  mTopBanner: "" | "DEFAULT" | "POWERAPP" | "INSTALL";

  @Column("enum", {
    name: "m_top_banner_view_page",
    enum: ["", "ALL", "MAIN"],
    default: () => "'MAIN'",
  })
  mTopBannerViewPage: "" | "ALL" | "MAIN";

  @Column("enum", {
    name: "m_top_banner_image",
    nullable: true,
    enum: ["", "jpg", "gif", "png"],
  })
  mTopBannerImage: "" | "jpg" | "gif" | "png" | null;

  @Column("varchar", {
    name: "m_top_banner_link1",
    nullable: true,
    length: 255,
  })
  mTopBannerLink1: string | null;

  @Column("varchar", {
    name: "m_top_banner_link2",
    nullable: true,
    length: 255,
  })
  mTopBannerLink2: string | null;

  @Column("varchar", { name: "m_instagram_token", nullable: true, length: 60 })
  mInstagramToken: string | null;

  @Column("varchar", {
    name: "m_instagram_api_name",
    nullable: true,
    length: 50,
  })
  mInstagramApiName: string | null;

  @Column("mediumtext", { name: "m_upper_category", nullable: true })
  mUpperCategory: string | null;

  @Column("char", { name: "m_responsive", length: 1, default: () => "'N'" })
  mResponsive: string;
}
