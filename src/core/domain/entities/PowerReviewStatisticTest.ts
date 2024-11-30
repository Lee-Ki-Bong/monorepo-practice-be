import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("power_review_statistic_test", { schema: "makeshop" })
export class PowerReviewStatisticTest {
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

  @Column("int", { name: "product_list", unsigned: true, default: () => "'0'" })
  productList: number;

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
}
