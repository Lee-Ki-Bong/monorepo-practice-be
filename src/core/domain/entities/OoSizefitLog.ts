import { Column, Entity, Index } from "typeorm";

@Index("order_date", ["adminuser", "orderDate"], {})
@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("review_date", ["adminuser", "reviewDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("oo_sizefit_log", { schema: "makeshop" })
export class OoSizefitLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "basket_num", length: 10 })
  basketNum: string;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("int", { name: "sf_uid", unsigned: true, default: () => "'0'" })
  sfUid: number;

  @Column("varchar", { name: "fit_review", length: 20 })
  fitReview: string;

  @Column("datetime", {
    name: "order_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  orderDate: Date;

  @Column("datetime", {
    name: "review_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reviewDate: Date;
}
