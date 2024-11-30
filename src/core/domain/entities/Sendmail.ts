import { Column, Entity, Index } from "typeorm";

@Index("fromemail", ["fromemail"], {})
@Index("mailserver", ["mailserver", "sendok"], {})
@Index("NAME", ["adminuser"], {})
@Index("senddate", ["senddate"], {})
@Entity("sendmail", { schema: "makeshop" })
export class Sendmail {
  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "senddate", nullable: true, length: 14 })
  senddate: string | null;

  @Column("char", { name: "sendok", length: 1, default: () => "'N'" })
  sendok: string;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", {
    name: "html",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  html: string | null;

  @Column("varchar", { name: "fromemail", nullable: true, length: 50 })
  fromemail: string | null;

  @Column("varchar", { name: "shopname", nullable: true, length: 50 })
  shopname: string | null;

  @Column("varchar", { name: "list", nullable: true, length: 100 })
  list: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 250 })
  subject: string | null;

  @Column("longtext", { name: "body", nullable: true })
  body: string | null;

  @Column("varchar", { name: "optiontxt", nullable: true, length: 250 })
  optiontxt: string | null;

  @Column("int", { name: "sendcount", nullable: true })
  sendcount: number | null;

  @Column("int", { name: "waitcount", nullable: true, default: () => "'0'" })
  waitcount: number | null;

  @Column("int", {
    name: "opencount",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  opencount: number | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 14 })
  enddate: string | null;

  @Column("varchar", {
    name: "mailserver",
    nullable: true,
    length: 20,
    default: () => "'groupmail1'",
  })
  mailserver: string | null;

  @Column("char", {
    name: "filesecure",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  filesecure: string | null;
}
