import { Column, Entity, Index } from "typeorm";

@Index("reg_date", ["regDate"], {})
@Entity("log_basket", { schema: "makeshop" })
export class LogBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "amount", nullable: true, default: () => "'0'" })
  amount: number | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;
}
