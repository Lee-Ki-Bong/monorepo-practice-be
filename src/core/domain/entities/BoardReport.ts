import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("comment_idx", ["adminuser", "commentUid"], {})
@Index("id_idx", ["adminuser", "reportUserId"], {})
@Index("idx_auto_report_idx", ["reportIdx"], {})
@Index("reason_idx", ["adminuser", "reportType"], {})
@Index("sub_idx", ["adminuser", "boardCode", "boardNum1", "boardNum2"], {})
@Index("writer_idx", ["adminuser", "reportWriter"], {})
@Entity("board_report", { schema: "makeshop" })
export class BoardReport {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "report_idx", unsigned: true })
  reportIdx: number;

  @Column("varchar", { name: "report_user_id", length: 20 })
  reportUserId: string;

  @Column("enum", {
    name: "report_target",
    enum: ["", "writer", "content", "comment"],
    default: () => "'content'",
  })
  reportTarget: "" | "writer" | "content" | "comment";

  @Column("char", { name: "report_type", length: 1 })
  reportType: string;

  @Column("mediumtext", { name: "report_reason" })
  reportReason: string;

  @Column("varchar", { name: "board_code", length: 24 })
  boardCode: string;

  @Column("varchar", { name: "board_num1", length: 7 })
  boardNum1: string;

  @Column("varchar", { name: "board_num2", length: 5 })
  boardNum2: string;

  @Column("int", { name: "comment_uid", default: () => "'0'" })
  commentUid: number;

  @Column("varchar", { name: "report_writer", length: 20 })
  reportWriter: string;

  @Column("datetime", {
    name: "report_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reportRegDate: Date;
}
