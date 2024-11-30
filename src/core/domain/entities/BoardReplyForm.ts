import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("board_reply_form", { schema: "makeshop" })
export class BoardReplyForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", length: 50 })
  title: string;

  @Column("varchar", { name: "subject", length: 100 })
  subject: string;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("enum", {
    name: "html_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  htmlType: "" | "Y" | "N";

  @Column("datetime", {
    name: "write_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  writeDate: Date;

  @Column("varchar", { name: "subid", nullable: true, length: 20 })
  subid: string | null;
}
