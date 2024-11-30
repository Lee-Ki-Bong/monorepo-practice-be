import { Column, Entity } from "typeorm";

@Entity("power_review_config_test", { schema: "makeshop" })
export class PowerReviewConfigTest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "board_code", length: 24 })
  boardCode: string;

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

  @Column("char", { name: "board_comment", length: 1, default: () => "'Y'" })
  boardComment: string;

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
    name: "board_fixed_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  boardFixedView: "" | "Y" | "N";

  @Column("char", { name: "board_score_type", length: 2, default: () => "'★'" })
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
    name: "board_review_write_type",
    enum: ["", "NONE", "ORDER", "DEPOSIT", "DELIVERY"],
    default: () => "'NONE'",
  })
  boardReviewWriteType: "" | "NONE" | "ORDER" | "DEPOSIT" | "DELIVERY";

  @Column("varchar", { name: "board_review_enddate", length: 12 })
  boardReviewEnddate: string;

  @Column("mediumint", {
    name: "board_newicon",
    unsigned: true,
    default: () => "'1'",
  })
  boardNewicon: number;

  @Column("enum", {
    name: "main_view",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  mainView: "" | "Y" | "N";

  @Column("int", { name: "main_review_max_day", default: () => "'7'" })
  mainReviewMaxDay: number;

  @Column("varchar", { name: "main_benefit_text", length: 30 })
  mainBenefitText: string;

  @Column("varchar", { name: "main_benefit_title", length: 100 })
  mainBenefitTitle: string;

  @Column("mediumtext", { name: "main_benefit_tip" })
  mainBenefitTip: string;

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
    default: () => "'prompt_give'",
  })
  reserveType: "" | "prompt_give" | "auth_give";

  @Column("int", { name: "reserve_first_review", default: () => "'0'" })
  reserveFirstReview: number;

  @Column("int", { name: "reserve_first_photo", default: () => "'0'" })
  reserveFirstPhoto: number;

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

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;
}
