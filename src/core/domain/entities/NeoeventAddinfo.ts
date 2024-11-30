import { Column, Entity, Index } from "typeorm";

@Index("add_type", ["adminuser", "addType"], {})
@Index("separator1", ["adminuser", "addType", "separator1"], {})
@Entity("neoevent_addinfo", { schema: "makeshop" })
export class NeoeventAddinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("bigint", {
    primary: true,
    name: "ev_no",
    unsigned: true,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "add_type", length: 30 })
  addType: string;

  @Column("varchar", { name: "separator1", length: 20 })
  separator1: string;

  @Column("mediumtext", { name: "add_value", nullable: true })
  addValue: string | null;
}
