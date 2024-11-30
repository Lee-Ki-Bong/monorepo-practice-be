import { Column, Entity } from "typeorm";

@Entity("divide_oo_trade_2014", { schema: "makeshop" })
export class DivideOoTrade_2014 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "basket_num",
    unsigned: true,
    default: () => "'0'",
  })
  basketNum: number;

  @Column("varchar", { name: "receiver_name", length: 255 })
  receiverName: string;

  @Column("varchar", { name: "receiver_phone", length: 255 })
  receiverPhone: string;

  @Column("varchar", { name: "receiver_mobile", length: 255 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_post", length: 255 })
  receiverPost: string;

  @Column("mediumtext", { name: "receiver_address", nullable: true })
  receiverAddress: string | null;

  @Column("mediumtext", { name: "receiver_address2", nullable: true })
  receiverAddress2: string | null;

  @Column("varchar", { name: "return_hname", length: 255 })
  returnHname: string;
}
