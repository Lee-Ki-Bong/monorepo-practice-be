import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Entity("tagcloud", { schema: "makeshop" })
export class Tagcloud {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("int", { name: "type", default: () => "'0'" })
  type: number;

  @Column("char", {
    name: "titletype",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  titletype: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("int", { name: "titlesize", nullable: true, default: () => "'20'" })
  titlesize: number | null;

  @Column("varchar", { name: "fontcolor", nullable: true, length: 6 })
  fontcolor: string | null;

  @Column("varchar", { name: "tibgcolor", nullable: true, length: 6 })
  tibgcolor: string | null;

  @Column("varchar", { name: "tagbgcolor", nullable: true, length: 6 })
  tagbgcolor: string | null;

  @Column("int", {
    name: "xsize",
    nullable: true,
    unsigned: true,
    default: () => "'160'",
  })
  xsize: number | null;

  @Column("int", {
    name: "ysize",
    nullable: true,
    unsigned: true,
    default: () => "'200'",
  })
  ysize: number | null;

  @Column("varchar", { name: "gapsize", nullable: true, length: 40 })
  gapsize: string | null;

  @Column("varchar", { name: "hidsize", length: 4, default: () => "'40'" })
  hidsize: string;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 16 })
  date: string | null;
}
