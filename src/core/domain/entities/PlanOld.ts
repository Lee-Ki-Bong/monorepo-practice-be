import { Column, Entity, Index } from "typeorm";

@Index("alldate", ["startdate", "enddate"], {})
@Index("date", ["adminuser", "startdate", "enddate"], {})
@Entity("plan_old", { schema: "makeshop" })
export class PlanOld {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 6 })
  code: string;

  @Column("int", { primary: true, name: "type", default: () => "'0'" })
  type: number;

  @Column("varchar", {
    name: "leftmenu",
    nullable: true,
    length: 4,
    default: () => "'NO'",
  })
  leftmenu: string | null;

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "startdate", nullable: true, length: 8 })
  startdate: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("int", {
    name: "productnum",
    nullable: true,
    unsigned: true,
    default: () => "'5'",
  })
  productnum: number | null;

  @Column("char", {
    name: "mainbannertype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  mainbannertype: string | null;

  @Column("varchar", { name: "mainbannertext", nullable: true, length: 255 })
  mainbannertext: string | null;

  @Column("char", {
    name: "topbannertype",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  topbannertype: string | null;

  @Column("mediumtext", { name: "topbannertext", nullable: true })
  topbannertext: string | null;

  @Column("mediumtext", { name: "product", nullable: true })
  product: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  display: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 16 })
  date: string | null;
}
