import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_rid", ["rid"], {})
@Index("type", ["adminuser", "type"], {})
@Entity("repos_option", { schema: "makeshop" })
export class ReposOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "rid", unsigned: true })
  rid: number;

  @Column("enum", {
    name: "type",
    enum: ["", "PC", "PP", "PS"],
    default: () => "'PC'",
  })
  type: "" | "PC" | "PP" | "PS";

  @Column("varchar", { name: "title", length: 20 })
  title: string;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;
}
