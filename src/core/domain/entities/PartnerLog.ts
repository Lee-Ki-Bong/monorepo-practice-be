import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("partner_log", { schema: "makeshop" })
export class PartnerLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "writer", nullable: true, length: 20 })
  writer: string | null;
}
