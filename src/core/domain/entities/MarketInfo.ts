import { Column, Entity } from "typeorm";

@Entity("market_info", { schema: "makeshop" })
export class MarketInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "mi_apikey", length: 50 })
  miApikey: string;

  @Column("varchar", { name: "mi_shopname", length: 50 })
  miShopname: string;

  @Column("varchar", { name: "mi_descript", length: 200 })
  miDescript: string;

  @Column("varchar", { name: "mi_phone", length: 15 })
  miPhone: string;

  @Column("date", { name: "mi_create", default: () => "'0000-00-00'" })
  miCreate: string;

  @Column("datetime", {
    name: "mi_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  miModDate: Date;
}
