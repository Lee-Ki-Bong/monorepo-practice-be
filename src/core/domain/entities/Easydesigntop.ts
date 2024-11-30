import { Column, Entity } from "typeorm";

@Entity("easydesigntop", { schema: "makeshop" })
export class Easydesigntop {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumint", {
    name: "xsize",
    unsigned: true,
    default: () => "'800'",
  })
  xsize: number;

  @Column("mediumint", { name: "ysize", unsigned: true, default: () => "'50'" })
  ysize: number;

  @Column("char", {
    name: "menualign",
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  menualign: string | null;

  @Column("char", {
    name: "background",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  background: string | null;

  @Column("char", {
    name: "logo",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  logo: string | null;

  @Column("char", {
    name: "rollover",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  rollover: string | null;

  @Column("varchar", {
    name: "image",
    nullable: true,
    length: 255,
    default: () => "'0,1,2,3,4,5'",
  })
  image: string | null;

  @Column("varchar", { name: "link1", nullable: true, length: 255 })
  link1: string | null;

  @Column("varchar", { name: "link2", nullable: true, length: 255 })
  link2: string | null;

  @Column("varchar", { name: "link3", nullable: true, length: 255 })
  link3: string | null;

  @Column("varchar", { name: "link4", nullable: true, length: 255 })
  link4: string | null;

  @Column("varchar", { name: "link5", nullable: true, length: 255 })
  link5: string | null;
}
