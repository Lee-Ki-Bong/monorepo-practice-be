import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_idx", ["adminuser", "reportUserId"], {})
@Index("idx_auto_report_idx", ["reportIdx"], {})
@Index("reason_idx", ["adminuser", "reportType"], {})
@Index("sub_idx", ["adminuser", "reviewUid", "reviewDate"], {})
@Index("writer_idx", ["adminuser", "reportWriter"], {})
@Entity("review_report", { schema: "makeshop" })
export class ReviewReport {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "report_idx", unsigned: true })
  reportIdx: number;

  @Column("varchar", { name: "report_user_id", length: 20 })
  reportUserId: string;

  @Column("enum", {
    name: "report_target",
    enum: ["", "writer", "content"],
    default: () => "'content'",
  })
  reportTarget: "" | "writer" | "content";

  @Column("char", { name: "report_type", length: 1 })
  reportType: string;

  @Column("mediumtext", { name: "report_reason" })
  reportReason: string;

  @Column("int", { name: "review_uid", unsigned: true, default: () => "'0'" })
  reviewUid: number;

  @Column("varchar", { name: "review_date", length: 14 })
  reviewDate: string;

  @Column("varchar", { name: "report_writer", length: 20 })
  reportWriter: string;

  @Column("datetime", {
    name: "report_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reportRegDate: Date;
}
