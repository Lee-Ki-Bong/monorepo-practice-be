import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_num", ["num"], {})
@Entity("snap_review_addinfo", { schema: "makeshop" })
export class SnapReviewAddinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "review_num",
    unsigned: true,
    default: () => "'0'",
  })
  reviewNum: number;

  @PrimaryGeneratedColumn({ type: "int", name: "num", unsigned: true })
  num: number;

  @Column("varchar", { name: "add_subject", nullable: true, length: 255 })
  addSubject: string | null;

  @Column("mediumtext", { name: "add_content" })
  addContent: string;

  @Column("int", { name: "add_max", unsigned: true, default: () => "'0'" })
  addMax: number;

  @Column("int", { name: "add_min", unsigned: true, default: () => "'0'" })
  addMin: number;
}
