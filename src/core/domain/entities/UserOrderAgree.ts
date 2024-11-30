import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["adminuser", "userId"], {})
@Entity("user_order_agree", { schema: "makeshop" })
export class UserOrderAgree {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "user_id", length: 12 })
  userId: string;

  @Column("datetime", {
    name: "agree_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  agreeDate: Date;
}
