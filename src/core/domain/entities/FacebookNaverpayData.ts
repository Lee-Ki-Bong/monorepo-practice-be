import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Entity("facebook_naverpay_data", { schema: "makeshop" })
export class FacebookNaverpayData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "npay_key", length: 26 })
  npayKey: string;

  @Column("mediumtext", { name: "npay_data" })
  npayData: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
