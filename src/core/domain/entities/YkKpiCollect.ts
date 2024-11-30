import { Column, Entity, Index } from "typeorm";

@Index("product_uid", ["adminuser", "productUid"], {})
@Entity("yk_kpi_collect", { schema: "makeshop" })
export class YkKpiCollect {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "history_type", length: 10 })
  historyType: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
