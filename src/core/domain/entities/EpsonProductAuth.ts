import { Column, Entity } from "typeorm";

@Entity("epson_product_auth", { schema: "makeshop" })
export class EpsonProductAuth {
  @Column("int", {
    primary: true,
    name: "ms_uid",
    unsigned: true,
    default: () => "'0'",
  })
  msUid: number;

  @Column("varchar", { primary: true, name: "serial_num", length: 20 })
  serialNum: string;

  @Column("varchar", { name: "user_id", length: 50 })
  userId: string;

  @Column("date", { name: "ship_date", default: () => "'0000-00-00'" })
  shipDate: string;

  @Column("date", { name: "purchase_date", default: () => "'0000-00-00'" })
  purchaseDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
