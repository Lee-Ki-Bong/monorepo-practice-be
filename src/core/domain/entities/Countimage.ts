import { Column, Entity } from "typeorm";

@Entity("countimage", { schema: "makeshop" })
export class Countimage {
  @Column("char", { primary: true, name: "imagecode", length: 3 })
  imagecode: string;

  @Column("varchar", {
    primary: true,
    name: "adminuser",
    length: 12,
    default: () => "'[ADMIN]'",
  })
  adminuser: string;

  @Column("varchar", { name: "imagename", length: 30 })
  imagename: string;

  @Column("smallint", { name: "x1", default: () => "'0'" })
  x1: number;

  @Column("smallint", { name: "y1", default: () => "'0'" })
  y1: number;

  @Column("smallint", { name: "x2", default: () => "'0'" })
  x2: number;

  @Column("smallint", { name: "y2", default: () => "'0'" })
  y2: number;

  @Column("smallint", { name: "c1", default: () => "'0'" })
  c1: number;

  @Column("smallint", { name: "c2", default: () => "'0'" })
  c2: number;

  @Column("smallint", { name: "c3", default: () => "'0'" })
  c3: number;
}
