import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_pra_idx", ["praIdx"], {})
@Index("index_date", ["adminuser", "praType", "praDate"], {})
@Entity("power_review_auto", { schema: "makeshop" })
export class PowerReviewAuto {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "pra_type",
    enum: ["", "COMMENT", "HIT"],
    default: () => "'COMMENT'",
  })
  praType: "" | "COMMENT" | "HIT";

  @PrimaryGeneratedColumn({ type: "int", name: "pra_idx", unsigned: true })
  praIdx: number;

  @Column("datetime", {
    name: "pra_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  praDate: Date;

  @Column("varchar", { name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "num1", length: 20 })
  num1: string;

  @Column("varchar", { name: "num2", length: 5 })
  num2: string;
}
