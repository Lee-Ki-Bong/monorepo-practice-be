import { Column, Entity, Index } from "typeorm";

@Index("index_usid", ["adminuser", "usType", "usId"], {})
@Entity("user_sns_godo", { schema: "makeshop" })
export class UserSnsGodo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("char", { primary: true, name: "us_type", length: 2 })
  usType: string;

  @Column("varchar", { name: "us_id", length: 255 })
  usId: string;

  @Column("varchar", { name: "us_key", length: 255 })
  usKey: string;

  @Column("date", { name: "us_date", default: () => "'0000-00-00'" })
  usDate: string;
}
