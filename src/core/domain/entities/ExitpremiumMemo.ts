import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Entity("exitpremium_memo", { schema: "makeshop" })
export class ExitpremiumMemo {
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

  @Column("varchar", { name: "memo_writer", length: 10 })
  memoWriter: string;
}
