import { Column, Entity } from "typeorm";

@Entity("neodesign_set_base", { schema: "makeshop" })
export class NeodesignSetBase {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnsetId: number;

  @Column("char", { primary: true, name: "dgnsetbase_type", length: 30 })
  dgnsetbaseType: string;

  @Column("int", { name: "tpl_group_id", unsigned: true, default: () => "'0'" })
  tplGroupId: number;
}
