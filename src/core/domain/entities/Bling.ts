import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("bling", { schema: "makeshop" })
export class Bling {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "mediumint", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "auto",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  auto: "" | "Y" | "N" | null;

  @Column("char", { name: "type", length: 1, default: () => "'I'" })
  type: string;

  @Column("varchar", { name: "pos", nullable: true, length: 10 })
  pos: string | null;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("enum", { name: "wmark", enum: ["", "Y", "N"], default: () => "'N'" })
  wmark: "" | "Y" | "N";

  @Column("enum", { name: "icon", enum: ["", "Y", "N"], default: () => "'Y'" })
  icon: "" | "Y" | "N";

  @Column("enum", {
    name: "subtitle",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  subtitle: "" | "Y" | "N";

  @Column("enum", {
    name: "view_images",
    nullable: true,
    enum: ["", "minimage", "tinyimage"],
  })
  viewImages: "" | "minimage" | "tinyimage" | null;

  @Column("mediumtext", { name: "xml", nullable: true })
  xml: string | null;

  @Column("datetime", {
    name: "created",
    default: () => "'0000-00-00 00:00:00'",
  })
  created: Date;

  @Column("datetime", { name: "modified", nullable: true })
  modified: Date | null;
}
