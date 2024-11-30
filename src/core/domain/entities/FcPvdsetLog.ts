import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Index("change_id", ["changeId"], {})
@Entity("fc_pvdset_log", { schema: "makeshop" })
export class FcPvdsetLog {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    name: "pvdset",
    nullable: true,
    length: 6,
    default: () => "'NONE'",
  })
  pvdset: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
