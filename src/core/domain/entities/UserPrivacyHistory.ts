import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uph_uid", ["uphUid"], {})
@Entity("user_privacy_history", { schema: "makeshop" })
export class UserPrivacyHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uph_uid", unsigned: true })
  uphUid: number;

  @Column("int", { name: "pi_uid", unsigned: true, default: () => "'0'" })
  piUid: number;

  @Column("varchar", { name: "items", length: 255 })
  items: string;

  @Column("varchar", { name: "reason", length: 255 })
  reason: string;

  @Column("enum", {
    name: "agree_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  agreeStatus: "" | "Y" | "N";

  @Column("varchar", { name: "subid", length: 20 })
  subid: string;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;
}
