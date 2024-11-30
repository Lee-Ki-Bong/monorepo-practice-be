import { Column, Entity } from "typeorm";

@Entity("company_intro", { schema: "makeshop" })
export class CompanyIntro {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "image", nullable: true, length: 50 })
  image: string | null;

  @Column("varchar", { name: "align", nullable: true, length: 10 })
  align: string | null;

  @Column("char", {
    name: "introtype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  introtype: string | null;

  @Column("varchar", { name: "companyname", nullable: true, length: 30 })
  companyname: string | null;

  @Column("varchar", { name: "shopname", nullable: true, length: 30 })
  shopname: string | null;

  @Column("varchar", { name: "owner", nullable: true, length: 10 })
  owner: string | null;

  @Column("varchar", { name: "owner_email", nullable: true, length: 30 })
  ownerEmail: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 100 })
  tel: string | null;

  @Column("varchar", { name: "fax", nullable: true, length: 20 })
  fax: string | null;

  @Column("varchar", { name: "time", nullable: true, length: 50 })
  time: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("varchar", { name: "privercy", nullable: true, length: 10 })
  privercy: string | null;

  @Column("varchar", { name: "privercy_email", nullable: true, length: 30 })
  privercyEmail: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("mediumtext", { name: "history", nullable: true })
  history: string | null;
}
