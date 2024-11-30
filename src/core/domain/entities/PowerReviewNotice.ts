import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("power_review_notice", { schema: "makeshop" })
export class PowerReviewNotice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("date", { name: "write_date", default: () => "'0000-00-00'" })
  writeDate: string;

  @Column("int", { name: "hit", default: () => "'0'" })
  hit: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  display: "" | "Y" | "N";
}
