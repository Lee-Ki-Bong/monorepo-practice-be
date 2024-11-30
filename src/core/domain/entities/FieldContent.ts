import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_field_content", { schema: "makeshop" })
export class FieldContent {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "table_name", length: 50 })
  tableName: string;

  @Column("varchar", { primary: true, name: "field_name", length: 50 })
  fieldName: string;

  @Column("varchar", { name: "simple_desc", nullable: true, length: 255 })
  simpleDesc: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("enum", {
    name: "content_view",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  contentView: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "content_html",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  contentHtml: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("varchar", { name: "ip_address", nullable: true, length: 15 })
  ipAddress: string | null;

  @Column("enum", {
    name: "field_used",
    enum: ["", "NO", "YES"],
    default: () => "'YES'",
  })
  fieldUsed: "" | "NO" | "YES";

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;
}
