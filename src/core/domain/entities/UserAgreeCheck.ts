import { Column, Entity, Index } from "typeorm";

@Index("user_id", ["adminuser", "userId"], {})
@Entity("user_agree_check", { schema: "makeshop" })
export class UserAgreeCheck {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "refund_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  refundDate: Date;

  @Column("datetime", {
    name: "receipt_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  receiptDate: Date;
}
