import { Column, Entity, Index } from "typeorm";

@Index("id_idx", ["adminuser", "id"], {})
@Entity("user_note_log", { schema: "makeshop" })
export class UserNoteLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "write_date", length: 25 })
  writeDate: string;

  @Column("varchar", { name: "read_date", nullable: true, length: 25 })
  readDate: string | null;

  @Column("varchar", { name: "read_ip", nullable: true, length: 15 })
  readIp: string | null;
}
