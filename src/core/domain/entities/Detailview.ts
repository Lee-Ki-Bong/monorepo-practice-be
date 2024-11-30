import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("detailview", { schema: "makeshop" })
export class Detailview {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "flash_info", length: 50 })
  flashInfo: string;

  @Column("varchar", { name: "xml_path", length: 100 })
  xmlPath: string;

  @Column("enum", { name: "used", enum: ["", "N", "Y"], default: () => "'N'" })
  used: "" | "N" | "Y";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;
}
