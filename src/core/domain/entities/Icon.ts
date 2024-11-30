import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("icon_no", ["iconNo"], {})
@Index("icon_path_type", ["adminuser", "iconPathType"], {})
@Entity("icon", { schema: "makeshop" })
export class Icon {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "icon_no", unsigned: true })
  iconNo: number;

  @Column("mediumint", { name: "icon_sort", nullable: true, unsigned: true })
  iconSort: number | null;

  @Column("enum", {
    name: "icon_path_type",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  iconPathType: "" | "WEB" | "MOBILE";
}
