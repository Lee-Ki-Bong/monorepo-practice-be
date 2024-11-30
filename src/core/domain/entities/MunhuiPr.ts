import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_so2", ["prId", "so2"], {})
@Entity("munhui_pr", { schema: "makeshop" })
export class MunhuiPr {
  @PrimaryGeneratedColumn({ type: "int", name: "pr_id" })
  prId: number;

  @Column("bigint", { name: "so1", default: () => "'0'" })
  so1: string;

  @Column("bigint", { name: "so2", default: () => "'0'" })
  so2: string;

  @Column("bigint", { name: "so3", default: () => "'0'" })
  so3: string;

  @Column("bigint", { name: "so4", default: () => "'0'" })
  so4: string;

  @Column("bigint", { name: "so5", default: () => "'0'" })
  so5: string;

  @Column("bigint", { name: "so6", default: () => "'0'" })
  so6: string;

  @Column("bigint", { name: "so7", default: () => "'0'" })
  so7: string;

  @Column("bigint", { name: "so8", default: () => "'0'" })
  so8: string;

  @Column("bigint", { name: "so9", default: () => "'0'" })
  so9: string;

  @Column("bigint", { name: "so10", default: () => "'0'" })
  so10: string;

  @Column("bigint", { name: "so11", default: () => "'0'" })
  so11: string;

  @Column("bigint", { name: "so12", default: () => "'0'" })
  so12: string;

  @Column("bigint", { name: "so13", default: () => "'0'" })
  so13: string;

  @Column("bigint", { name: "so14", default: () => "'0'" })
  so14: string;

  @Column("bigint", { name: "so15", default: () => "'0'" })
  so15: string;

  @Column("bigint", { name: "so16", default: () => "'0'" })
  so16: string;

  @Column("bigint", { name: "so17", default: () => "'0'" })
  so17: string;

  @Column("bigint", { name: "so18", default: () => "'0'" })
  so18: string;

  @Column("bigint", { name: "so19", default: () => "'0'" })
  so19: string;

  @Column("bigint", { name: "so20", default: () => "'0'" })
  so20: string;
}
