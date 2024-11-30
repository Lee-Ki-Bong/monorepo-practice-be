import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("skt_id", ["sktId"], {})
@Entity("search_keyword_template", { schema: "makeshop" })
export class SearchKeywordTemplate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "skt_id", unsigned: true })
  sktId: number;

  @Column("enum", { name: "skt_use", enum: ["Y", "N"], default: () => "'N'" })
  sktUse: "Y" | "N";

  @Column("enum", { name: "skt_type", enum: ["S", "U"], default: () => "'S'" })
  sktType: "S" | "U";

  @Column("char", { name: "skt_period", length: 1, default: () => "'T'" })
  sktPeriod: string;

  @Column("varchar", { name: "skt_title", length: 255 })
  sktTitle: string;

  @Column("tinyint", {
    name: "skt_count",
    unsigned: true,
    default: () => "'10'",
  })
  sktCount: number;

  @Column("text", { name: "skt_design" })
  sktDesign: string;

  @Column("text", { name: "skt_user_rank" })
  sktUserRank: string;

  @Column("datetime", {
    name: "skt_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sktRegDate: Date;

  @Column("datetime", {
    name: "skt_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  sktModDate: Date;
}
