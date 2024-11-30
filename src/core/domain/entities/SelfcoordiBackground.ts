import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("selfcoordi_background", { schema: "makeshop" })
export class SelfcoordiBackground {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("enum", {
    name: "type",
    enum: ["", "face", "body", "background"],
    default: () => "'face'",
  })
  type: "" | "face" | "body" | "background";

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", { name: "img", nullable: true, length: 50 })
  img: string | null;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
