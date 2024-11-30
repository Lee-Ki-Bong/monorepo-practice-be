import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("quickmenu", { schema: "makeshop" })
export class Quickmenu {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "is_folder",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  isFolder: "" | "Y" | "N";

  @Column("varchar", { name: "parent", length: 100 })
  parent: string;

  @Column("varchar", { name: "code", length: 100 })
  code: string;

  @Column("varchar", { name: "subject", length: 200 })
  subject: string;

  @Column("varchar", { name: "link", length: 250 })
  link: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;
}
