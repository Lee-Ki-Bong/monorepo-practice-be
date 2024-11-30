import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_regdate", ["adminuser", "regDate"], {})
@Entity("click_map_test", { schema: "makeshop" })
export class ClickMapTest {
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

  @Column("float", {
    name: "percent_width",
    precision: 12,
    default: () => "'0'",
  })
  percentWidth: number;

  @Column("int", { name: "max_height", unsigned: true, default: () => "'0'" })
  maxHeight: number;

  @Column("float", {
    name: "percent_height",
    precision: 12,
    default: () => "'0'",
  })
  percentHeight: number;

  @Column("varchar", { name: "referer", length: 255, default: () => "'0'" })
  referer: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
