import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Entity("category_search_filters", { schema: "makeshop" })
export class CategorySearchFilters {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("int", {
    name: "seq",
    nullable: true,
    comment: "노출 순서",
    unsigned: true,
    default: () => "'0'",
  })
  seq: number | null;

  @Column("char", {
    name: "display",
    comment: "노출 여부 Y : 노출, N : 미노출",
    length: 1,
    default: () => "'N'",
  })
  display: string;

  @Column("varchar", {
    name: "input_type",
    length: 10,
    default: () => "'checkbox'",
  })
  inputType: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'1001-01-01 00:00:00'",
  })
  modDate: Date;
}
