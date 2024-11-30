import { Column, Entity, Index } from "typeorm";

@Index("b2b_uid", ["b2bUid"], {})
@Index("uid_detail", ["adminuser", "uid", "production"], {})
@Entity("product_detail_piratesky", { schema: "makeshop" })
export class ProductDetailPiratesky {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "hscode", length: 10 })
  hscode: string;

  @Column("varchar", { name: "supplyname", nullable: true, length: 255 })
  supplyname: string | null;

  @Column("varchar", { name: "subtitle", nullable: true, length: 255 })
  subtitle: string | null;

  @Column("varchar", { name: "eng_name", nullable: true, length: 255 })
  engName: string | null;

  @Column("varchar", { name: "optionprice", nullable: true, length: 250 })
  optionprice: string | null;

  @Column("varchar", { name: "production", nullable: true, length: 50 })
  production: string | null;

  @Column("varchar", { name: "origin", nullable: true, length: 50 })
  origin: string | null;

  @Column("varchar", { name: "brname", nullable: true, length: 100 })
  brname: string | null;

  @Column("varchar", { name: "model", nullable: true, length: 100 })
  model: string | null;

  @Column("mediumint", { name: "weight", nullable: true, unsigned: true })
  weight: number | null;

  @Column("float", { name: "new_weight", precision: 12, default: () => "'0'" })
  newWeight: number;

  @Column("varchar", { name: "spcode", nullable: true, length: 250 })
  spcode: string | null;

  @Column("varchar", { name: "spcode2", nullable: true, length: 250 })
  spcode2: string | null;

  @Column("varchar", { name: "spcnt", nullable: true, length: 255 })
  spcnt: string | null;

  @Column("varchar", { name: "addcode", nullable: true, length: 200 })
  addcode: string | null;

  @Column("varchar", { name: "match_title", nullable: true, length: 255 })
  matchTitle: string | null;

  @Column("mediumtext", { name: "warning_info" })
  warningInfo: string;

  @Column("int", { name: "b2b_uid", nullable: true, unsigned: true })
  b2bUid: number | null;

  @Column("enum", {
    name: "soldout",
    nullable: true,
    enum: ["", "SHORT", "SMS"],
  })
  soldout: "" | "SHORT" | "SMS" | null;

  @Column("longtext", { name: "product_info", nullable: true })
  productInfo: string | null;

  @Column("mediumtext", { name: "detailinfo", nullable: true })
  detailinfo: string | null;

  @Column("mediumtext", { name: "admin_memo", nullable: true })
  adminMemo: string | null;

  @Column("mediumtext", { name: "multi_image", nullable: true })
  multiImage: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("longtext", { name: "m_content", nullable: true })
  mContent: string | null;

  @Column("varchar", { name: "reg_id", nullable: true, length: 12 })
  regId: string | null;

  @Column("varchar", { name: "mod_id", nullable: true, length: 12 })
  modId: string | null;

  @Column("varchar", { name: "move_uid", nullable: true, length: 20 })
  moveUid: string | null;

  @Column("int", {
    name: "score_1",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  score_1: number | null;

  @Column("int", {
    name: "score_2",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  score_2: number | null;

  @Column("int", {
    name: "score_3",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  score_3: number | null;

  @Column("int", {
    name: "score_4",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  score_4: number | null;

  @Column("int", {
    name: "score_5",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  score_5: number | null;

  @Column("mediumtext", { name: "source_info", nullable: true })
  sourceInfo: string | null;

  @Column("enum", {
    name: "discount_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  discountUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "discount_value", nullable: true })
  discountValue: string | null;

  @Column("mediumtext", { name: "add_search_data" })
  addSearchData: string;

  @Column("int", { name: "psc_id", default: () => "'0'" })
  pscId: number;
}
