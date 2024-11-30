import { Column, Entity } from "typeorm";

@Entity("diary", { schema: "makeshop" })
export class Diary {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "date", length: 8 })
  date: string;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display: string | null;

  @Column("char", {
    name: "rowsu",
    nullable: true,
    length: 1,
    default: () => "'3'",
  })
  rowsu: string | null;

  @Column("char", {
    name: "member",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  member: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 20 })
  tel: string | null;

  @Column("mediumint", {
    name: "width",
    nullable: true,
    unsigned: true,
    default: () => "'600'",
  })
  width: number | null;

  @Column("char", {
    name: "code",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  code: string | null;

  @Column("mediumtext", { name: "about", nullable: true })
  about: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 250 })
  etctype: string | null;
}
