import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("codekey", ["code", "codekey"], { unique: true })
@Entity("oneclick_config", { schema: "makeshop" })
export class OneclickConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "name", length: 40 })
  name: string;

  @Column("varchar", { name: "code", length: 40 })
  code: string;

  @Column("int", { name: "codekey", default: () => "'1'" })
  codekey: number;

  @Column("mediumtext", { name: "info", nullable: true })
  info: string | null;

  @Column("enum", {
    name: "visible",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  visible: "" | "Y" | "N";

  @Column("varchar", { name: "reg_date", length: 14 })
  regDate: string;

  @Column("varchar", { name: "up_date", nullable: true, length: 14 })
  upDate: string | null;

  @Column("int", { name: "sort", default: () => "'0'" })
  sort: number;
}
