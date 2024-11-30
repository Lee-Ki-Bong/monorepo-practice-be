import { Column, Entity } from "typeorm";

@Entity("order_pg_log", { schema: "makeshop" })
export class OrderPgLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("char", { name: "card_type", nullable: true, length: 3 })
  cardType: string | null;

  @Column("varchar", { name: "card_id", nullable: true, length: 50 })
  cardId: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
