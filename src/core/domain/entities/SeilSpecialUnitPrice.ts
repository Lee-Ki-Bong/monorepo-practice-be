import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index(
  "unit_price",
  [
    "adminuser",
    "seilUserId",
    "seilPartnerUid",
    "ordernum",
    "productUid",
    "optionData",
  ],
  {}
)
@Entity("seil_special_unit_price", { schema: "makeshop" })
export class SeilSpecialUnitPrice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "seil_user_id", length: 20 })
  seilUserId: string;

  @Column("int", {
    primary: true,
    name: "seil_partner_uid",
    default: () => "'0'",
  })
  seilPartnerUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "option_data", length: 255 })
  optionData: string;

  @Column("varchar", { name: "seil_unit_price", length: 50 })
  seilUnitPrice: string;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
