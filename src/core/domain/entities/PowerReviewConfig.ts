import { Column, Entity } from "typeorm";

@Entity("power_review_config", { schema: "makeshop" })
export class PowerReviewConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "board_code", length: 24 })
  boardCode: string;

  @Column("int", { name: "board_cnt", unsigned: true, default: () => "'0'" })
  boardCnt: number;

  @Column("char", { name: "board_auth_write", length: 1, default: () => "'M'" })
  boardAuthWrite: string;

  @Column("enum", {
    name: "board_agree_guest",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardAgreeGuest: "" | "Y" | "N";

  @Column("varchar", { name: "board_groupid", length: 4 })
  boardGroupid: string;

  @Column("varchar", { name: "board_groupid_w", length: 4 })
  boardGroupidW: string;

  @Column("char", { name: "board_writer", length: 1, default: () => "'0'" })
  boardWriter: string;

  @Column("enum", {
    name: "board_nickname_replace_type",
    enum: ["", "user_name", "user_id"],
    default: () => "'user_name'",
  })
  boardNicknameReplaceType: "" | "user_name" | "user_id";

  @Column("enum", {
    name: "board_writer_hide_type",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardWriterHideType: "" | "Y" | "N";

  @Column("char", { name: "board_writer_hide_cnt", length: 1 })
  boardWriterHideCnt: string;

  @Column("enum", {
    name: "board_category_type",
    enum: ["", "ALL", "SELECT"],
    default: () => "'ALL'",
  })
  boardCategoryType: "" | "ALL" | "SELECT";

  @Column("char", { name: "board_comment", length: 1, default: () => "'Y'" })
  boardComment: string;

  @Column("enum", {
    name: "board_comment_write_user",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardCommentWriteUser: "" | "Y" | "N";

  @Column("mediumint", {
    name: "board_comment_min_length",
    unsigned: true,
    default: () => "'0'",
  })
  boardCommentMinLength: number;

  @Column("mediumint", {
    name: "board_comment_max_length",
    unsigned: true,
    default: () => "'500'",
  })
  boardCommentMaxLength: number;

  @Column("enum", {
    name: "board_orderby",
    enum: ["", "ASC", "DESC"],
    default: () => "'ASC'",
  })
  boardOrderby: "" | "ASC" | "DESC";

  @Column("enum", {
    name: "board_comment_cnt_limit",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardCommentCntLimit: "" | "Y" | "N";

  @Column("varchar", { name: "board_admin_writer", length: 30 })
  boardAdminWriter: string;

  @Column("mediumint", {
    name: "board_min_length",
    unsigned: true,
    default: () => "'0'",
  })
  boardMinLength: number;

  @Column("enum", {
    name: "board_auto_display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardAutoDisplay: "" | "Y" | "N";

  @Column("enum", {
    name: "board_user_control",
    enum: ["", "Y", "N", "R"],
    default: () => "'Y'",
  })
  boardUserControl: "" | "Y" | "N" | "R";

  @Column("enum", {
    name: "board_limit_deilvery",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardLimitDeilvery: "" | "Y" | "N";

  @Column("int", {
    name: "board_limit_deilvery_day",
    unsigned: true,
    default: () => "'0'",
  })
  boardLimitDeilveryDay: number;

  @Column("enum", {
    name: "board_fixed_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardFixedView: "" | "Y" | "N";

  @Column("char", { name: "board_score_type", length: 2, default: () => "'1'" })
  boardScoreType: string;

  @Column("int", { name: "board_hits_plus", default: () => "'1'" })
  boardHitsPlus: number;

  @Column("mediumint", {
    name: "board_traffic",
    unsigned: true,
    default: () => "'3'",
  })
  boardTraffic: number;

  @Column("int", { name: "board_attach_cnt", default: () => "'3'" })
  boardAttachCnt: number;

  @Column("mediumtext", { name: "board_writeword" })
  boardWriteword: string;

  @Column("enum", {
    name: "board_add_clearw",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardAddClearw: "" | "Y" | "N";

  @Column("enum", {
    name: "board_filtertype",
    enum: ["", "Y", "1", "2"],
    default: () => "'Y'",
  })
  boardFiltertype: "" | "Y" | "1" | "2";

  @Column("mediumtext", { name: "board_change_word" })
  boardChangeWord: string;

  @Column("enum", {
    name: "board_comm_fil",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardCommFil: "" | "Y" | "N";

  @Column("enum", {
    name: "board_review_limit",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardReviewLimit: "" | "Y" | "N";

  @Column("enum", {
    name: "board_photo_review_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardPhotoReviewType: "" | "Y" | "N";

  @Column("enum", {
    name: "board_review_write_type",
    enum: [
      "",
      "NONE",
      "ORDER",
      "DEPOSIT",
      "DELIVERY",
      "DELISTART",
      "DELIING",
      "COMPLETE",
    ],
    default: () => "'NONE'",
  })
  boardReviewWriteType:
    | ""
    | "NONE"
    | "ORDER"
    | "DEPOSIT"
    | "DELIVERY"
    | "DELISTART"
    | "DELIING"
    | "COMPLETE";

  @Column("varchar", { name: "board_review_enddate", length: 12 })
  boardReviewEnddate: string;

  @Column("mediumint", {
    name: "board_newicon",
    unsigned: true,
    default: () => "'1'",
  })
  boardNewicon: number;

  @Column("enum", {
    name: "board_writer_sms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardWriterSms: "" | "Y" | "N";

  @Column("enum", {
    name: "board_sms_send_type",
    enum: ["", "0", "1", "3"],
    default: () => "'0'",
  })
  boardSmsSendType: "" | "0" | "1" | "3";

  @Column("enum", {
    name: "board_sms_except_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardSmsExceptType: "" | "Y" | "N";

  @Column("enum", {
    name: "board_auto_comment",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardAutoComment: "" | "Y" | "N";

  @Column("mediumtext", { name: "board_auto_comment_text" })
  boardAutoCommentText: string;

  @Column("mediumtext", { name: "board_photo_auto_comment_text" })
  boardPhotoAutoCommentText: string;

  @Column("varchar", { name: "board_auto_comment_hname", length: 30 })
  boardAutoCommentHname: string;

  @Column("varchar", { name: "board_auto_comment_delay", length: 10 })
  boardAutoCommentDelay: string;

  @Column("varchar", { name: "board_sort_product", length: 10 })
  boardSortProduct: string;

  @Column("varchar", { name: "board_sort_list", length: 10 })
  boardSortList: string;

  @Column("enum", {
    name: "board_notice_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardNoticeUse: "" | "Y" | "N";

  @Column("enum", {
    name: "board_notice_type",
    enum: ["", "NONE", "BASIC", "PHOTO", "ALL"],
    default: () => "'NONE'",
  })
  boardNoticeType: "" | "NONE" | "BASIC" | "PHOTO" | "ALL";

  @Column("enum", {
    name: "board_addcode_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardAddcodeUse: "" | "Y" | "N";

  @Column("enum", {
    name: "board_option_view",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardOptionView: "" | "Y" | "N";

  @Column("mediumtext", { name: "board_addcode" })
  boardAddcode: string;

  @Column("mediumtext", { name: "board_star" })
  boardStar: string;

  @Column("enum", {
    name: "board_write_staff",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardWriteStaff: "" | "Y" | "N";

  @Column("enum", {
    name: "board_staff_writer_hide",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardStaffWriterHide: "" | "Y" | "N";

  @Column("enum", {
    name: "board_staff_writer_type",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardStaffWriterType: "" | "Y" | "N";

  @Column("int", { name: "board_staff_writer_cnt", default: () => "'0'" })
  boardStaffWriterCnt: number;

  @Column("mediumtext", { name: "board_staff_comment_writer" })
  boardStaffCommentWriter: string;

  @Column("enum", {
    name: "board_use_report",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardUseReport: "" | "Y" | "N";

  @Column("enum", {
    name: "board_write_hidden_product",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  boardWriteHiddenProduct: "" | "Y" | "N";

  @Column("enum", {
    name: "main_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mainView: "" | "Y" | "N";

  @Column("char", { name: "main_template", length: 1, default: () => "'1'" })
  mainTemplate: string;

  @Column("int", { name: "main_review_max_day", default: () => "'7'" })
  mainReviewMaxDay: number;

  @Column("varchar", { name: "main_benefit_text", nullable: true, length: 40 })
  mainBenefitText: string | null;

  @Column("varchar", { name: "main_benefit_guest_text", length: 100 })
  mainBenefitGuestText: string;

  @Column("varchar", { name: "main_benefit_title", length: 100 })
  mainBenefitTitle: string;

  @Column("varchar", { name: "main_benefit_guest_title", length: 200 })
  mainBenefitGuestTitle: string;

  @Column("mediumtext", { name: "main_benefit_tip" })
  mainBenefitTip: string;

  @Column("mediumtext", { name: "main_benefit_tip_mobile" })
  mainBenefitTipMobile: string;

  @Column("varchar", { name: "main_review_complete", length: 60 })
  mainReviewComplete: string;

  @Column("enum", {
    name: "main_position_type",
    enum: ["", "LEFT", "CENTER"],
    default: () => "'LEFT'",
  })
  mainPositionType: "" | "LEFT" | "CENTER";

  @Column("int", { name: "main_left_position", default: () => "'0'" })
  mainLeftPosition: number;

  @Column("int", { name: "main_center_position", default: () => "'0'" })
  mainCenterPosition: number;

  @Column("mediumint", {
    name: "main_mobile_popup",
    unsigned: true,
    default: () => "'1'",
  })
  mainMobilePopup: number;

  @Column("char", { name: "detail_template", length: 1, default: () => "'2'" })
  detailTemplate: string;

  @Column("int", { name: "review_display_cnt", default: () => "'5'" })
  reviewDisplayCnt: number;

  @Column("enum", {
    name: "detail_top_view",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  detailTopView: "" | "Y" | "N";

  @Column("int", { name: "detail_top_view_cnt", default: () => "'1'" })
  detailTopViewCnt: number;

  @Column("enum", {
    name: "detail_view_type",
    enum: ["", "STAR", "STYLE"],
    default: () => "'STAR'",
  })
  detailViewType: "" | "STAR" | "STYLE";

  @Column("enum", {
    name: "detail_bottom_view",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  detailBottomView: "" | "Y" | "N";

  @Column("enum", {
    name: "detail_photo_review",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  detailPhotoReview: "" | "Y" | "N";

  @Column("varchar", { name: "detail_photo_text", length: 100 })
  detailPhotoText: string;

  @Column("varchar", { name: "detail_photo_review_file", length: 255 })
  detailPhotoReviewFile: string;

  @Column("varchar", { name: "detail_photo_review_url", length: 255 })
  detailPhotoReviewUrl: string;

  @Column("enum", {
    name: "detail_photo_review_target",
    enum: ["", "BLANK", "SELF"],
    default: () => "'BLANK'",
  })
  detailPhotoReviewTarget: "" | "BLANK" | "SELF";

  @Column("varchar", { name: "detail_btn_list", length: 100 })
  detailBtnList: string;

  @Column("varchar", { name: "detail_btn_list_photo", length: 255 })
  detailBtnListPhoto: string;

  @Column("varchar", { name: "detail_btn_list_brand", length: 255 })
  detailBtnListBrand: string;

  @Column("varchar", { name: "detail_btn_write", length: 100 })
  detailBtnWrite: string;

  @Column("varchar", { name: "detail_score_none_text", length: 255 })
  detailScoreNoneText: string;

  @Column("mediumtext", { name: "review_color_code" })
  reviewColorCode: string;

  @Column("enum", {
    name: "best_review_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  bestReviewUse: "" | "Y" | "N";

  @Column("int", { name: "best_review_cnt", default: () => "'1'" })
  bestReviewCnt: number;

  @Column("enum", {
    name: "list_write_id",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  listWriteId: "" | "Y" | "N";

  @Column("enum", {
    name: "list_write_date",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  listWriteDate: "" | "Y" | "N";

  @Column("enum", {
    name: "list_hit",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  listHit: "" | "Y" | "N";

  @Column("enum", {
    name: "reserve_type",
    enum: ["", "prompt_give", "auth_give"],
    default: () => "'auth_give'",
  })
  reserveType: "" | "prompt_give" | "auth_give";

  @Column("enum", {
    name: "prompt_reserve_term",
    enum: ["", "PROMPT", "DELIEND", "COMPLETE"],
    default: () => "'PROMPT'",
  })
  promptReserveTerm: "" | "PROMPT" | "DELIEND" | "COMPLETE";

  @Column("int", { name: "reserve_first_review", default: () => "'0'" })
  reserveFirstReview: number;

  @Column("int", { name: "reserve_first_photo", default: () => "'0'" })
  reserveFirstPhoto: number;

  @Column("int", { name: "reserve_text_cnt", default: () => "'0'" })
  reserveTextCnt: number;

  @Column("int", { name: "reserve_photo_min_money", default: () => "'0'" })
  reservePhotoMinMoney: number;

  @Column("int", { name: "reserve_photo_basic_money", default: () => "'0'" })
  reservePhotoBasicMoney: number;

  @Column("int", { name: "reserve_photo_max_money", default: () => "'0'" })
  reservePhotoMaxMoney: number;

  @Column("int", { name: "reserve_review_min_money", default: () => "'0'" })
  reserveReviewMinMoney: number;

  @Column("int", { name: "reserve_review_basic_money", default: () => "'0'" })
  reserveReviewBasicMoney: number;

  @Column("int", { name: "reserve_review_max_money", default: () => "'0'" })
  reserveReviewMaxMoney: number;

  @Column("enum", {
    name: "reserve_price_type",
    nullable: true,
    enum: ["", "ORDER", "PRODUCT"],
    default: () => "'ORDER'",
  })
  reservePriceType: "" | "ORDER" | "PRODUCT" | null;

  @Column("varchar", { name: "reserve_message", length: 255 })
  reserveMessage: string;

  @Column("date", { name: "pay_start_date", default: () => "'0000-00-00'" })
  payStartDate: string;

  @Column("date", { name: "pay_end_date", default: () => "'0000-00-00'" })
  payEndDate: string;

  @Column("enum", {
    name: "pay_status",
    enum: ["", "USE", "FREE", "NONE"],
    default: () => "'NONE'",
  })
  payStatus: "" | "USE" | "FREE" | "NONE";

  @Column("mediumtext", { name: "etc_set" })
  etcSet: string;

  @Column("enum", {
    name: "service_type",
    enum: ["", "BASIC", "PREMIUM"],
    default: () => "'BASIC'",
  })
  serviceType: "" | "BASIC" | "PREMIUM";

  @Column("varchar", { name: "sync_board", length: 24 })
  syncBoard: string;

  @Column("datetime", {
    name: "sync_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  syncDate: Date;

  @Column("enum", {
    name: "auto_sync",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  autoSync: "" | "Y" | "N";

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("enum", {
    name: "info_view_type",
    enum: ["", "A", "P", "M", "N"],
    default: () => "'P'",
  })
  infoViewType: "" | "A" | "P" | "M" | "N";

  @Column("varchar", { name: "m_detail_score_none_text", length: 255 })
  mDetailScoreNoneText: string;

  @Column("char", {
    name: "use_except_benefit",
    length: 1,
    default: () => "'0'",
  })
  useExceptBenefit: string;

  @Column("mediumtext", { name: "except_product_uid" })
  exceptProductUid: string;

  @Column("mediumtext", { name: "except_category" })
  exceptCategory: string;
}
