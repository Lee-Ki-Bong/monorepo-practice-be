import { Column, Entity } from "typeorm";

@Entity("bottombanner", { schema: "makeshop" })
export class Bottombanner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("mediumint", { name: "xsize", unsigned: true, default: () => "'0'" })
  xsize: number;

  @Column("mediumint", { name: "ysize", unsigned: true, default: () => "'50'" })
  ysize: number;

  @Column("varchar", {
    name: "background",
    nullable: true,
    length: 7,
    default: () => "'N'",
  })
  background: string | null;

  @Column("varchar", {
    name: "image",
    nullable: true,
    length: 255,
    default: () => "'0,1,2,3,4,5'",
  })
  image: string | null;

  @Column("varchar", {
    name: "basicimage",
    nullable: true,
    length: 255,
    default: () => "'0,1,2,3,4,5'",
  })
  basicimage: string | null;

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

  @Column("varchar", { name: "link6", nullable: true, length: 255 })
  link6: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display: string | null;
}
