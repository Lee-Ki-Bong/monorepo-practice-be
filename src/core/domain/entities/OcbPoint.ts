import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("status", ["adminuser", "status"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("ocb_point", { schema: "makeshop" })
export class OcbPoint {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "point", nullable: true })
  point: number | null;

  @Column("varchar", { name: "content", nullable: true, length: 255 })
  content: string | null;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["", "USE", "SAVE", "CANCEL"],
    default: () => "'USE'",
  })
  status: "" | "USE" | "SAVE" | "CANCEL" | null;

  @Column("mediumtext", { name: "rel", nullable: true })
  rel: string | null;
}
