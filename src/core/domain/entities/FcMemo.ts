import { Column, Entity, Index } from "typeorm";

@Index("adminuser", ["adminuser", "fmRegdate"], {})
@Entity("fc_memo", { schema: "makeshop" })
export class FcMemo {
  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "agency", length: 12 })
  agency: string;

  @Column("mediumtext", { name: "fm_content", nullable: true })
  fmContent: string | null;

  @Column("datetime", {
    name: "fm_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  fmRegdate: Date;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;
}
