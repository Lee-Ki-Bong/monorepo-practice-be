import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminbrand", ["adminuser", "brandcode"], {})
@Index("admindate", ["adminuser", "dateUpdate"], {})
@Index("idx_auto_cart_id", ["cartId"], {})
@Entity("cart_temp", { schema: "makeshop" })
export class CartTemp {
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

  @PrimaryGeneratedColumn({ type: "int", name: "cart_id", unsigned: true })
  cartId: number;

  @Column("varchar", {
    name: "cart_type",
    length: 10,
    default: () => "'NORMAL'",
  })
  cartType: string;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("int", { name: "amount", nullable: true, default: () => "'0'" })
  amount: number | null;

  @Column("varchar", { name: "date_update", nullable: true, length: 14 })
  dateUpdate: string | null;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "linkurl", nullable: true, length: 50 })
  linkurl: string | null;

  @Column("varchar", { name: "ad_url", nullable: true, length: 250 })
  adUrl: string | null;

  @Column("varchar", { name: "pack_uid", length: 80 })
  packUid: string;

  @Column("enum", {
    name: "pay_path",
    enum: ["", "WEB", "MOBILE", "POWERAPP"],
    default: () => "'WEB'",
  })
  payPath: "" | "WEB" | "MOBILE" | "POWERAPP";

  @Column("int", {
    name: "smartpickup_store_uid",
    unsigned: true,
    default: () => "'0'",
  })
  smartpickupStoreUid: number;

  @Column("date", {
    name: "smartpickup_wishdate",
    default: () => "'0000-00-00'",
  })
  smartpickupWishdate: string;

  @Column("varchar", { name: "etctype", length: 255 })
  etctype: string;

  @Column("mediumtext", { name: "add_info" })
  addInfo: string;
}
