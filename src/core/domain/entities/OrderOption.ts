import { Column, Entity } from "typeorm";

@Entity("order_option", { schema: "makeshop" })
export class OrderOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", {
    primary: true,
    name: "spindex",
    length: 7,
    default: () => "'0'",
  })
  spindex: string;

  @Column("mediumtext", { name: "optname", nullable: true })
  optname: string | null;
}
