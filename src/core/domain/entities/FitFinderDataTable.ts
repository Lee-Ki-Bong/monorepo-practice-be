import { Column, Entity } from "typeorm";

@Entity("fit_finder_data_table", { schema: "makeshop" })
export class FitFinderDataTable {
  @Column("char", {
    primary: true,
    name: "sex",
    length: 1,
    default: () => "'1'",
  })
  sex: string;

  @Column("int", {
    primary: true,
    name: "age",
    unsigned: true,
    default: () => "'0'",
  })
  age: number;

  @Column("char", {
    primary: true,
    name: "type",
    length: 1,
    default: () => "'H'",
  })
  type: string;

  @Column("float", { name: "A1", nullable: true, precision: 4, scale: 1 })
  a1: number | null;

  @Column("float", { name: "A2", nullable: true, precision: 4, scale: 1 })
  a2: number | null;

  @Column("float", { name: "A3", nullable: true, precision: 4, scale: 1 })
  a3: number | null;

  @Column("float", { name: "A4", nullable: true, precision: 4, scale: 1 })
  a4: number | null;

  @Column("float", { name: "A5", nullable: true, precision: 4, scale: 1 })
  a5: number | null;

  @Column("float", { name: "A6", nullable: true, precision: 4, scale: 1 })
  a6: number | null;

  @Column("float", { name: "A7", nullable: true, precision: 4, scale: 1 })
  a7: number | null;

  @Column("float", { name: "A8", nullable: true, precision: 4, scale: 1 })
  a8: number | null;

  @Column("float", { name: "A9", nullable: true, precision: 4, scale: 1 })
  a9: number | null;

  @Column("float", { name: "A10", nullable: true, precision: 4, scale: 1 })
  a10: number | null;

  @Column("float", { name: "A11", nullable: true, precision: 4, scale: 1 })
  a11: number | null;

  @Column("float", { name: "A12", nullable: true, precision: 4, scale: 1 })
  a12: number | null;

  @Column("float", { name: "A13", nullable: true, precision: 4, scale: 1 })
  a13: number | null;
}
