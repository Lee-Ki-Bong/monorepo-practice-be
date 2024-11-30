import { Column, Entity } from "typeorm";

@Entity("oo_donation_basket", { schema: "makeshop" })
export class OoDonationBasket {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "basket_num", default: () => "'0'" })
  basketNum: number;

  @Column("int", {
    name: "odb_product_uid",
    unsigned: true,
    default: () => "'0'",
  })
  odbProductUid: number;

  @Column("enum", {
    name: "odb_donation_type",
    enum: ["", "M", "PRD"],
    default: () => "'M'",
  })
  odbDonationType: "" | "M" | "PRD";

  @Column("int", { name: "odb_donation", unsigned: true, default: () => "'0'" })
  odbDonation: number;

  @Column("enum", {
    name: "odb_deliend_yn",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  odbDeliendYn: "" | "Y" | "N";

  @Column("enum", {
    name: "odb_give_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  odbGiveStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "odb_deliend_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  odbDeliendDate: Date;

  @Column("datetime", {
    name: "odb_give_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  odbGiveDate: Date;
}
