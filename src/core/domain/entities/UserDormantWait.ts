import { Column, Entity, Index } from "typeorm";

@Index("dormant_wait_date", ["adminuser", "dormantWaitDate"], {})
@Entity("user_dormant_wait", { schema: "makeshop" })
export class UserDormantWait {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("date", { name: "dormant_wait_date", default: () => "'0000-00-00'" })
  dormantWaitDate: string;
}
