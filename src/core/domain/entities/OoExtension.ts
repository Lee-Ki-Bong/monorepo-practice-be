import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ext_uid", ["extUid"], {})
@Entity("oo_extension", { schema: "makeshop" })
export class OoExtension {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ext_uid", unsigned: true })
  extUid: number;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("varchar", { name: "ext_type", length: 8 })
  extType: string;

  @Column("varchar", { name: "ext_title", length: 200 })
  extTitle: string;

  @Column("int", { name: "ext_price", default: () => "'0'" })
  extPrice: number;

  @Column("int", { name: "ext_reserve", default: () => "'0'" })
  extReserve: number;

  @Column("enum", {
    name: "ext_reserve_chk",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  extReserveChk: "" | "Y" | "N";

  @Column("varchar", { name: "ext_info", length: 255 })
  extInfo: string;

  @Column("enum", {
    name: "ext_status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  extStatus: "" | "Y" | "N";

  @Column("varchar", { name: "coupon_num", length: 8 })
  couponNum: string;
}
