import { Column, Entity, Index } from "typeorm";

@Index("is_proc", ["adminuser", "isProc"], {})
@Entity("yk_group_check", { schema: "makeshop" })
export class YkGroupCheck {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "group_id", nullable: true, length: 4 })
  groupId: string | null;

  @Column("enum", {
    name: "is_proc",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isProc: "" | "Y" | "N";
}
