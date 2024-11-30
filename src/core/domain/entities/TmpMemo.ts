import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("_tmp_memo", { schema: "makeshop" })
export class TmpMemo {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("mediumtext", { name: "memo" })
  memo: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
