import { Column, Entity, Index } from "typeorm";

@Index("index_orderby", ["adminuser", "orderby"], {})
@Entity("power_review_category", { schema: "makeshop" })
export class PowerReviewCategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("char", { primary: true, name: "xcode", length: 3 })
  xcode: string;

  @Column("char", { primary: true, name: "scode", length: 3 })
  scode: string;

  @Column("char", { primary: true, name: "type", length: 1 })
  type: string;

  @Column("int", { name: "orderby", default: () => "'1'" })
  orderby: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
