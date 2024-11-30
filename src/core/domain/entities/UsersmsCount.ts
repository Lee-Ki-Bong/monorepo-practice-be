import { Column, Entity } from "typeorm";

@Entity("usersms_count", { schema: "makeshop" })
export class UsersmsCount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("smallint", { name: "expire_sms", default: () => "'0'" })
  expireSms: number;

  @Column("smallint", { name: "reserve_sms", default: () => "'0'" })
  reserveSms: number;

  @Column("varchar", { name: "day_count", length: 5, default: () => "'0'" })
  dayCount: string;

  @Column("date", { name: "use_date", default: () => "'0000-00-00'" })
  useDate: string;
}
