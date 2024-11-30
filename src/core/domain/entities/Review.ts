import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("list_sort", ["adminuser", "bestDate", "date"], {})
@Index("recommend", ["adminuser", "uid", "recommend", "date"], {})
@Index("recommend_date", ["adminuser", "uid", "recommendDate", "date"], {})
@Index("userid", ["adminuser", "id"], {})
@Entity("review", { schema: "makeshop" })
export class Review {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("char", { name: "display", length: 1, default: () => "'N'" })
  display: string;

  @Column("varchar", { name: "display_subid", nullable: true, length: 12 })
  displaySubid: string | null;

  @Column("char", {
    name: "write_path",
    nullable: true,
    length: 20,
    default: () => "'WEB'",
  })
  writePath: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("tinyint", { name: "score_1", default: () => "'0'" })
  score_1: number;

  @Column("tinyint", { name: "score_2", default: () => "'0'" })
  score_2: number;

  @Column("tinyint", { name: "score_3", default: () => "'0'" })
  score_3: number;

  @Column("tinyint", { name: "score_4", default: () => "'0'" })
  score_4: number;

  @Column("tinyint", { name: "score_5", default: () => "'0'" })
  score_5: number;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "sub_id", nullable: true, length: 12 })
  subId: string | null;

  @Column("varchar", { name: "attach", nullable: true, length: 30 })
  attach: string | null;

  @Column("enum", {
    name: "recommend",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  recommend: "" | "N" | "Y";

  @Column("enum", {
    name: "is_spam",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  isSpam: "" | "YES" | "NO";

  @Column("enum", { name: "view", enum: ["", "N", "Y"], default: () => "'Y'" })
  view: "" | "N" | "Y";

  @Column("datetime", {
    name: "recommend_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  recommendDate: Date | null;

  @Column("datetime", {
    name: "best_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  bestDate: Date;
}
