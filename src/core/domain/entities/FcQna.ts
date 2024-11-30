import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_num", ["num"], {})
@Entity("fc_qna", { schema: "makeshop" })
export class FcQna {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "agency", length: 12 })
  agency: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("enum", {
    name: "htmltype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  htmltype: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "reply",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  reply: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "reply_content", nullable: true })
  replyContent: string | null;

  @Column("varchar", { name: "file_name", nullable: true, length: 100 })
  fileName: string | null;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;
}
