import { Column, Entity } from "typeorm";

@Entity("_project_check", { schema: "makeshop" })
export class ProjectCheck {
  @Column("smallint", {
    primary: true,
    name: "pid",
    unsigned: true,
    default: () => "'0'",
  })
  pid: number;

  @Column("smallint", {
    primary: true,
    name: "chk_id",
    unsigned: true,
    default: () => "'0'",
  })
  chkId: number;
}
