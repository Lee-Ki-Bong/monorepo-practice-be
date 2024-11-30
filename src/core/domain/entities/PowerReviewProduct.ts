import { Column, Entity, Index } from "typeorm";

@Index("index_avg", ["adminuser", "code", "prpAvg"], {})
@Index("index_count", ["adminuser", "code", "prpCount"], {})
@Index("index_write", ["adminuser", "code", "lastWrite"], {})
@Entity("power_review_product", { schema: "makeshop" })
export class PowerReviewProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "prp_score", unsigned: true, default: () => "'0'" })
  prpScore: number;

  @Column("int", { name: "prp_score2", default: () => "'0'" })
  prpScore2: number;

  @Column("int", { name: "prp_score3", default: () => "'0'" })
  prpScore3: number;

  @Column("int", { name: "prp_score4", default: () => "'0'" })
  prpScore4: number;

  @Column("int", { name: "prp_score5", default: () => "'0'" })
  prpScore5: number;

  @Column("int", { name: "prp_count", unsigned: true, default: () => "'0'" })
  prpCount: number;

  @Column("int", {
    name: "prp_count_photo",
    unsigned: true,
    default: () => "'0'",
  })
  prpCountPhoto: number;

  @Column("int", { name: "prp_star_1", unsigned: true, default: () => "'0'" })
  prpStar_1: number;

  @Column("int", { name: "prp_star_2", unsigned: true, default: () => "'0'" })
  prpStar_2: number;

  @Column("int", { name: "prp_star_3", unsigned: true, default: () => "'0'" })
  prpStar_3: number;

  @Column("int", { name: "prp_star_4", unsigned: true, default: () => "'0'" })
  prpStar_4: number;

  @Column("int", { name: "prp_star_5", unsigned: true, default: () => "'0'" })
  prpStar_5: number;

  @Column("float", {
    name: "prp_avg",
    unsigned: true,
    precision: 12,
    default: () => "'0'",
  })
  prpAvg: number;

  @Column("mediumtext", { name: "prp_adddata" })
  prpAdddata: string;

  @Column("datetime", {
    name: "last_write",
    default: () => "'0000-00-00 00:00:00'",
  })
  lastWrite: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
