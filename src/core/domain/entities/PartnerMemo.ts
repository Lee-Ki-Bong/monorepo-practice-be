import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("partner_memo", { schema: "makeshop" })
export class PartnerMemo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "id", length: 12 })
  id: string;

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
