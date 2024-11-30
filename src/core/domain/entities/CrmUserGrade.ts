import { Column, Entity } from "typeorm";

@Entity("crm_user_grade", { schema: "makeshop" })
export class CrmUserGrade {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "grade", length: 1 })
  grade: string;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("enum", {
    name: "use_status",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  useStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
