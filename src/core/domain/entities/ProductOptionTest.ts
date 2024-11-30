import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_opt_id", ["optId"], {})
@Index("opt_sort", ["adminuser", "uid", "optSort"], {})
@Index("opt_type", ["adminuser", "uid", "optType"], {})
@Index("opt_use", ["adminuser", "uid", "optUse"], {})
@Entity("product_option_test", { schema: "makeshop" })
export class ProductOptionTest {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "opt_id", unsigned: true })
  optId: number;

  @Column("smallint", {
    name: "opt_sort",
    unsigned: true,
    default: () => "'0'",
  })
  optSort: number;

  @Column("enum", {
    name: "opt_type",
    enum: ["", "SELECT", "SINGLE", "CUSTOM", "ADDITION"],
    default: () => "'SELECT'",
  })
  optType: "" | "SELECT" | "SINGLE" | "CUSTOM" | "ADDITION";

  @Column("varchar", { name: "opt_name", length: 200 })
  optName: string;

  @Column("varchar", { name: "opt_matrix", length: 200 })
  optMatrix: string;

  @Column("mediumtext", { name: "opt_value" })
  optValue: string;

  @Column("mediumtext", { name: "opt_price" })
  optPrice: string;

  @Column("varchar", { name: "opt_guide", length: 200 })
  optGuide: string;

  @Column("enum", {
    name: "opt_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  optUse: "" | "Y" | "N";

  @Column("enum", {
    name: "opt_mix",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  optMix: "" | "Y" | "N";

  @Column("enum", {
    name: "opt_mandatory",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  optMandatory: "" | "Y" | "N";
}
