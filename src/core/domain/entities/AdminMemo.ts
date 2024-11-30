import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Entity("admin_memo", { schema: "makeshop" })
export class AdminMemo {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "memo_id", unsigned: true })
  memoId: number;

  @Column("datetime", {
    name: "memo_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  memoDate: Date;

  @Column("mediumtext", { name: "memo_con" })
  memoCon: string;

  @Column("varchar", { name: "memo_writer", length: 12 })
  memoWriter: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "etc", length: 100 })
  etc: string;
}
