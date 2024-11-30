import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Index("index_regdate", ["adminuser", "regdate"], {})
@Entity("power_review_statistic", { schema: "makeshop" })
export class PowerReviewStatistic {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("date", { name: "regdate", default: () => "'0000-00-00'" })
  regdate: string;

  @Column("int", { name: "total", unsigned: true, default: () => "'0'" })
  total: number;

  @Column("int", { name: "total_pc", unsigned: true, default: () => "'0'" })
  totalPc: number;

  @Column("int", { name: "total_mobile", unsigned: true, default: () => "'0'" })
  totalMobile: number;

  @Column("int", { name: "good_pc", unsigned: true, default: () => "'0'" })
  goodPc: number;

  @Column("int", { name: "good_mobile", unsigned: true, default: () => "'0'" })
  goodMobile: number;

  @Column("int", { name: "bad_pc", unsigned: true, default: () => "'0'" })
  badPc: number;

  @Column("int", { name: "bad_mobile", unsigned: true, default: () => "'0'" })
  badMobile: number;

  @Column("int", { name: "view_pc", unsigned: true, default: () => "'0'" })
  viewPc: number;

  @Column("int", { name: "view_mobile", unsigned: true, default: () => "'0'" })
  viewMobile: number;

  @Column("int", { name: "view_best", unsigned: true, default: () => "'0'" })
  viewBest: number;

  @Column("int", { name: "view_score", unsigned: true, default: () => "'0'" })
  viewScore: number;

  @Column("int", { name: "view_photo", unsigned: true, default: () => "'0'" })
  viewPhoto: number;

  @Column("int", { name: "view_detail", unsigned: true, default: () => "'0'" })
  viewDetail: number;

  @Column("int", { name: "view_board", unsigned: true, default: () => "'0'" })
  viewBoard: number;

  @Column("int", {
    name: "list_board_pc",
    unsigned: true,
    default: () => "'0'",
  })
  listBoardPc: number;

  @Column("int", {
    name: "list_board_moble",
    unsigned: true,
    default: () => "'0'",
  })
  listBoardMoble: number;

  @Column("int", {
    name: "list_board_photo_pc",
    unsigned: true,
    default: () => "'0'",
  })
  listBoardPhotoPc: number;

  @Column("int", {
    name: "list_board_photo_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  listBoardPhotoMobile: number;

  @Column("int", {
    name: "list_detail_pc",
    unsigned: true,
    default: () => "'0'",
  })
  listDetailPc: number;

  @Column("int", {
    name: "list_detail_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  listDetailMobile: number;

  @Column("int", { name: "product_main", unsigned: true, default: () => "'0'" })
  productMain: number;

  @Column("int", {
    name: "product_board",
    unsigned: true,
    default: () => "'0'",
  })
  productBoard: number;

  @Column("int", { name: "product_view", unsigned: true, default: () => "'0'" })
  productView: number;

  @Column("int", { name: "pop_main_pc", unsigned: true, default: () => "'0'" })
  popMainPc: number;

  @Column("int", {
    name: "pop_main_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  popMainMobile: number;

  @Column("int", { name: "pop_order_pc", unsigned: true, default: () => "'0'" })
  popOrderPc: number;

  @Column("int", {
    name: "pop_order_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  popOrderMobile: number;

  @Column("int", { name: "sms_url", unsigned: true, default: () => "'0'" })
  smsUrl: number;

  @Column("int", { name: "click", unsigned: true, default: () => "'0'" })
  click: number;

  @Column("int", { name: "click_pc", unsigned: true, default: () => "'0'" })
  clickPc: number;

  @Column("int", { name: "click_mobile", unsigned: true, default: () => "'0'" })
  clickMobile: number;

  @Column("int", {
    name: "click_main_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickMainPc: number;

  @Column("int", {
    name: "click_main_list_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickMainListPc: number;

  @Column("int", {
    name: "click_widget_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickWidgetPc: number;

  @Column("int", {
    name: "click_board_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickBoardPc: number;

  @Column("int", {
    name: "click_board_photo_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickBoardPhotoPc: number;

  @Column("int", {
    name: "click_score_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickScorePc: number;

  @Column("int", {
    name: "click_detail_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickDetailPc: number;

  @Column("int", {
    name: "click_order_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickOrderPc: number;

  @Column("int", {
    name: "click_view_pc",
    unsigned: true,
    default: () => "'0'",
  })
  clickViewPc: number;

  @Column("int", {
    name: "click_main_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickMainMobile: number;

  @Column("int", {
    name: "click_main_list_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickMainListMobile: number;

  @Column("int", {
    name: "click_widget_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickWidgetMobile: number;

  @Column("int", {
    name: "click_board_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickBoardMobile: number;

  @Column("int", {
    name: "click_board_photo_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickBoardPhotoMobile: number;

  @Column("int", {
    name: "click_score_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickScoreMobile: number;

  @Column("int", {
    name: "click_detail_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickDetailMobile: number;

  @Column("int", {
    name: "click_order_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickOrderMobile: number;

  @Column("int", {
    name: "click_view_mobile",
    unsigned: true,
    default: () => "'0'",
  })
  clickViewMobile: number;

  @Column("int", {
    name: "click_sms_link",
    unsigned: true,
    default: () => "'0'",
  })
  clickSmsLink: number;

  @Column("int", {
    name: "view_board_photo",
    unsigned: true,
    default: () => "'0'",
  })
  viewBoardPhoto: number;

  @Column("int", {
    name: "view_main_list",
    unsigned: true,
    default: () => "'0'",
  })
  viewMainList: number;

  @Column("int", { name: "view_widget", unsigned: true, default: () => "'0'" })
  viewWidget: number;

  @Column("int", {
    name: "product_main_list",
    unsigned: true,
    default: () => "'0'",
  })
  productMainList: number;

  @Column("int", {
    name: "product_board_photo",
    unsigned: true,
    default: () => "'0'",
  })
  productBoardPhoto: number;

  @Column("int", {
    name: "product_order",
    unsigned: true,
    default: () => "'0'",
  })
  productOrder: number;

  @Column("int", {
    name: "product_widget",
    unsigned: true,
    default: () => "'0'",
  })
  productWidget: number;
}
