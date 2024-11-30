import { Column, Entity } from "typeorm";

@Entity("divide_cashbill_2024", { schema: "makeshop" })
export class DivideCashbill_2024 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("varchar", { name: "p_ordernum", nullable: true, length: 32 })
  pOrdernum: string | null;

  @Column("varchar", { name: "hname", nullable: true, length: 255 })
  hname: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 255 })
  tel: string | null;

  @Column("text", { name: "email", nullable: true })
  email: string | null;
}
