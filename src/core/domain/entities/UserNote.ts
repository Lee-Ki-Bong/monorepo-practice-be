import { Column, Entity, Index } from "typeorm";

@Index("readkey", ["adminuser", "readDate"], {})
@Index("writekey", ["adminuser", "writeDate"], {})
@Entity("user_note", { schema: "makeshop" })
export class UserNote {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "write_subid", nullable: true, length: 12 })
  writeSubid: string | null;

  @Column("varchar", { name: "read_subid", nullable: true, length: 12 })
  readSubid: string | null;

  @Column("varchar", { primary: true, name: "write_date", length: 25 })
  writeDate: string;

  @Column("varchar", { name: "read_date", nullable: true, length: 25 })
  readDate: string | null;

  @Column("varchar", { name: "write_ip", nullable: true, length: 15 })
  writeIp: string | null;

  @Column("varchar", { name: "read_ip", nullable: true, length: 15 })
  readIp: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 255 })
  url: string | null;
}
