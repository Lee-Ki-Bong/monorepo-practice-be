import { Column, Entity } from "typeorm";

@Entity("url_link", { schema: "makeshop" })
export class UrlLink {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "key", length: 40 })
  key: string;

  @Column("varchar", { name: "url", length: 50 })
  url: string;

  @Column("varchar", { name: "date", length: 12 })
  date: string;
}
