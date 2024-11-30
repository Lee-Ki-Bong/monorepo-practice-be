import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("benefit", ["category", "oneclickIdx"], { unique: true })
@Entity("oneclick_benefit", { schema: "makeshop" })
export class OneclickBenefit {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("int", { name: "category", default: () => "'0'" })
  category: number;

  @Column("int", { name: "oneclick_idx", default: () => "'1'" })
  oneclickIdx: number;

  @Column("mediumtext", { name: "info", nullable: true })
  info: string | null;
}
