import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_dgnmemo_id", ["dgnmemoId"], {})
@Entity("neodesign_memo", { schema: "makeshop" })
export class NeodesignMemo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "dgnmemo_id", unsigned: true })
  dgnmemoId: number;

  @Column("datetime", {
    name: "dgnmemo_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  dgnmemoDate: Date;

  @Column("varchar", { name: "dgnmemo_admin_id", length: 12 })
  dgnmemoAdminId: string;

  @Column("mediumtext", { name: "dgnmemo_contents" })
  dgnmemoContents: string;
}
