import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "couponnum", "date"], {})
@Index("id", ["adminuser", "id"], {})
@Index("ordernum_used", ["adminuser", "ordernum", "used"], {})
@Index("subdate", ["adminuser", "date", "subId"], {})
@Index("use_date", ["adminuser", "useDate"], {})
@Entity("usercoupon", { schema: "makeshop" })
export class Usercoupon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("int", {
    primary: true,
    name: "number",
    unsigned: true,
    default: () => "'1'",
  })
  number: number;

  @Column("varchar", { name: "cause_ordernum", nullable: true, length: 26 })
  causeOrdernum: string | null;

  @Column("varchar", { name: "reg_date", nullable: true, length: 10 })
  regDate: string | null;

  @Column("varchar", { name: "use_date", nullable: true, length: 10 })
  useDate: string | null;

  @Column("char", {
    name: "used",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  used: string | null;

  @Column("varchar", { name: "ordernum", nullable: true, length: 26 })
  ordernum: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("varchar", { name: "sub_id", nullable: true, length: 12 })
  subId: string | null;

  @Column("enum", {
    name: "send_sms",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  sendSms: "" | "N" | "Y";
}
