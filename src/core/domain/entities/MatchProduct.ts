import { Column, Entity, Index } from "typeorm";

@Index("match_key", ["adminuser", "matchKey"], {})
@Index("match_status", ["adminuser", "matchStatus"], {})
@Entity("match_product", { schema: "makeshop" })
export class MatchProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "match_name",
    length: 10,
    default: () => "'plto'",
  })
  matchName: string;

  @Column("int", {
    primary: true,
    name: "product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  productUid: number;

  @Column("varchar", { name: "match_category", length: 10 })
  matchCategory: string;

  @Column("varchar", { name: "match_key", length: 20 })
  matchKey: string;

  @Column("varchar", {
    name: "match_status",
    length: 10,
    default: () => "'READY'",
  })
  matchStatus: string;

  @Column("varchar", { name: "return_data", length: 250 })
  returnData: string;

  @Column("mediumtext", { name: "match_addinfo" })
  matchAddinfo: string;

  @Column("datetime", {
    name: "req_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reqDate: Date;

  @Column("datetime", {
    name: "res_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  resDate: Date;
}
