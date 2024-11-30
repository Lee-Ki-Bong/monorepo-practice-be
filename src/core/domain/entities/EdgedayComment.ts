import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_edco_id", ["edcoId"], {})
@Entity("edgeday_comment", { schema: "makeshop" })
export class EdgedayComment {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "ed_id",
    unsigned: true,
    default: () => "'0'",
  })
  edId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "edco_id", unsigned: true })
  edcoId: number;

  @Column("datetime", {
    name: "edco_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  edcoRegisterDate: Date;

  @Column("varchar", { name: "edco_user_id", length: 12 })
  edcoUserId: string;

  @Column("enum", {
    name: "edco_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  edcoDisplay: "" | "YES" | "NO";

  @Column("mediumtext", { name: "edco_contents" })
  edcoContents: string;

  @Column("varchar", { name: "edco_reply_name", nullable: true, length: 20 })
  edcoReplyName: string | null;

  @Column("mediumtext", { name: "edco_reply", nullable: true })
  edcoReply: string | null;

  @Column("datetime", { name: "edco_reply_date", nullable: true })
  edcoReplyDate: Date | null;
}
