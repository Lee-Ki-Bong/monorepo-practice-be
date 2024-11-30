import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_regdate", ["adminuser", "regDate"], {})
@Index("branduid", ["adminuser", "branduid", "special", "regDate"], {})
@Entity("click_map", { schema: "makeshop" })
export class ClickMap {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "page", length: 255 })
  page: string;

  @Column("float", { name: "clientX", precision: 12, default: () => "'0'" })
  clientX: number;

  @Column("float", { name: "clientY", precision: 12, default: () => "'0'" })
  clientY: number;

  @Column("int", { name: "max_width", unsigned: true, default: () => "'0'" })
  maxWidth: number;

  @Column("smallint", {
    name: "percent_width",
    unsigned: true,
    default: () => "'0'",
  })
  percentWidth: number;

  @Column("varchar", { name: "referer", length: 255, default: () => "'0'" })
  referer: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("int", { name: "branduid", nullable: true, unsigned: true })
  branduid: number | null;

  @Column("char", { name: "special", nullable: true, length: 1 })
  special: string | null;
}
