import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("memo_dhwodla20", { schema: "makeshop" })
export class MemoDhwodla20 {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "name", length: 12 })
  name: string;

  @Column("varchar", { name: "pw", length: 12 })
  pw: string;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "IP", length: 100 })
  ip: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("enum", {
    name: "secret",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  secret: "" | "Y" | "N";

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";

  @Column("enum", {
    name: "comment",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  comment: "" | "Y" | "N";
}
