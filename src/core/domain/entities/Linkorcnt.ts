import { Column, Entity, Index } from "typeorm";

@Index("adminuser_id", ["adminuser", "id"], {})
@Entity("linkorcnt", { schema: "makeshop" })
export class Linkorcnt {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "startdate", nullable: true, length: 8 })
  startdate: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("int", { name: "ordercnt", nullable: true, default: () => "'0'" })
  ordercnt: number | null;
}
