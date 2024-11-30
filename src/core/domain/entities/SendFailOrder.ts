import { Column, Entity } from "typeorm";

@Entity("send_fail_order", { schema: "makeshop" })
export class SendFailOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "num", length: 50 })
  num: string;

  @Column("varchar", { name: "notice", nullable: true, length: 150 })
  notice: string | null;

  @Column("datetime", { name: "fail_date", nullable: true })
  failDate: Date | null;

  @Column("datetime", { name: "succ_date", nullable: true })
  succDate: Date | null;
}
