import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adm_uid", ["adminuser", "ccPrdUid", "ccRegdate"], {})
@Index("idx_auto_cc_uid", ["ccUid"], {})
@Index("regdate", ["adminuser", "ccRegdate"], {})
@Entity("cnm_call", { schema: "makeshop" })
export class CnmCall {
  @Column("varchar", { primary: true, name: "adminuser", length: 13 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cc_uid", unsigned: true })
  ccUid: number;

  @Column("datetime", {
    name: "cc_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  ccRegdate: Date;

  @Column("int", { name: "cc_prd_uid", unsigned: true, default: () => "'0'" })
  ccPrdUid: number;

  @Column("varchar", { name: "cc_callnum", length: 13 })
  ccCallnum: string;

  @Column("enum", {
    name: "cc_ordchk",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  ccOrdchk: "" | "N" | "Y";
}
