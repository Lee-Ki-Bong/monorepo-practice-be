import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("func_name", ["funcName"], { unique: true })
@Entity("makeshop_common_func", { schema: "makeshop" })
export class MakeshopCommonFunc {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", {
    name: "category",
    length: 12,
    default: () => "'undefined'",
  })
  category: string;

  @Column("varchar", { name: "func_name", unique: true, length: 30 })
  funcName: string;

  @Column("varchar", {
    name: "func_ver",
    length: 30,
    default: () => "'0.00.00'",
  })
  funcVer: string;

  @Column("varchar", {
    name: "func_type",
    length: 6,
    default: () => "'normal'",
  })
  funcType: string;

  @Column("varchar", { name: "func_desc", length: 255 })
  funcDesc: string;

  @Column("mediumtext", { name: "func_code" })
  funcCode: string;

  @Column("char", { name: "active", length: 1, default: () => "'T'" })
  active: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "up_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  upDate: Date;

  @Column("varchar", { name: "author", length: 20 })
  author: string;

  @Column("mediumtext", { name: "history_log", nullable: true })
  historyLog: string | null;
}
