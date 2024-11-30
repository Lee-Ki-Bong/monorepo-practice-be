import { Column, Entity } from "typeorm";

@Entity("selfcoordi_product", { schema: "makeshop" })
export class SelfcoordiProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("char", { name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { name: "cate2", length: 3 })
  cate2: string;

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

  @Column("int", { name: "color1", nullable: true, unsigned: true })
  color1: number | null;

  @Column("varchar", { name: "frontimg1", nullable: true, length: 50 })
  frontimg1: string | null;

  @Column("varchar", { name: "backimg1", nullable: true, length: 50 })
  backimg1: string | null;

  @Column("varchar", { name: "upperimg1", nullable: true, length: 50 })
  upperimg1: string | null;

  @Column("varchar", { name: "addfrontimg1", nullable: true, length: 50 })
  addfrontimg1: string | null;

  @Column("varchar", { name: "addbackimg1", nullable: true, length: 50 })
  addbackimg1: string | null;

  @Column("varchar", { name: "addupperimg1", nullable: true, length: 50 })
  addupperimg1: string | null;

  @Column("int", { name: "color2", nullable: true, unsigned: true })
  color2: number | null;

  @Column("varchar", { name: "frontimg2", nullable: true, length: 50 })
  frontimg2: string | null;

  @Column("varchar", { name: "backimg2", nullable: true, length: 50 })
  backimg2: string | null;

  @Column("varchar", { name: "upperimg2", nullable: true, length: 50 })
  upperimg2: string | null;

  @Column("varchar", { name: "addfrontimg2", nullable: true, length: 50 })
  addfrontimg2: string | null;

  @Column("varchar", { name: "addbackimg2", nullable: true, length: 50 })
  addbackimg2: string | null;

  @Column("varchar", { name: "addupperimg2", nullable: true, length: 50 })
  addupperimg2: string | null;

  @Column("int", { name: "color3", nullable: true, unsigned: true })
  color3: number | null;

  @Column("varchar", { name: "frontimg3", nullable: true, length: 50 })
  frontimg3: string | null;

  @Column("varchar", { name: "backimg3", nullable: true, length: 50 })
  backimg3: string | null;

  @Column("varchar", { name: "upperimg3", nullable: true, length: 50 })
  upperimg3: string | null;

  @Column("varchar", { name: "addfrontimg3", nullable: true, length: 50 })
  addfrontimg3: string | null;

  @Column("varchar", { name: "addbackimg3", nullable: true, length: 50 })
  addbackimg3: string | null;

  @Column("varchar", { name: "addupperimg3", nullable: true, length: 50 })
  addupperimg3: string | null;
}
