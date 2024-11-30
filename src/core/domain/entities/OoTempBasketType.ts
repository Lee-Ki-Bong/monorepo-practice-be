import { Column, Entity } from "typeorm";

@Entity("oo_temp_basket_type", { schema: "makeshop" })
export class OoTempBasketType {
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

  @Column("varchar", { primary: true, name: "basket_type", length: 50 })
  basketType: string;

  @Column("int", {
    primary: true,
    name: "basket_type_uid",
    unsigned: true,
    default: () => "'0'",
  })
  basketTypeUid: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("datetime", {
    name: "update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  updateDate: Date;

  @Column("varchar", { name: "basket_etctype", length: 255 })
  basketEtctype: string;
}
