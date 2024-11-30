import { Column, Entity } from "typeorm";

@Entity("naverblog_api", { schema: "makeshop" })
export class NaverblogApi {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "naverid1", nullable: true, length: 30 })
  naverid1: string | null;

  @Column("varchar", { name: "blogid1", nullable: true, length: 30 })
  blogid1: string | null;

  @Column("varchar", { name: "naverpw1", nullable: true, length: 40 })
  naverpw1: string | null;

  @Column("varchar", { name: "naverid2", nullable: true, length: 30 })
  naverid2: string | null;

  @Column("varchar", { name: "blogid2", nullable: true, length: 30 })
  blogid2: string | null;

  @Column("varchar", { name: "naverpw2", nullable: true, length: 40 })
  naverpw2: string | null;

  @Column("varchar", { name: "naverid3", nullable: true, length: 30 })
  naverid3: string | null;

  @Column("varchar", { name: "blogid3", nullable: true, length: 30 })
  blogid3: string | null;

  @Column("varchar", { name: "naverpw3", nullable: true, length: 40 })
  naverpw3: string | null;

  @Column("varchar", { name: "daumid", nullable: true, length: 40 })
  daumid: string | null;

  @Column("int", { name: "daumcate", nullable: true, default: () => "'0'" })
  daumcate: number | null;

  @Column("varchar", { name: "daumaccess_token", nullable: true, length: 100 })
  daumaccessToken: string | null;

  @Column("varchar", {
    name: "daumaccess_token_secret",
    nullable: true,
    length: 255,
  })
  daumaccessTokenSecret: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
