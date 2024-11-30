import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_apply_rid", ["applyRid"], {})
@Index("match_key", ["adminuser", "applyCode", "matchKey"], {})
@Entity("smart_reserve_apply", { schema: "makeshop" })
export class SmartReserveApply {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "apply_rid", unsigned: true })
  applyRid: number;

  @Column("varchar", { name: "reservenum", length: 8 })
  reservenum: string;

  @Column("varchar", { name: "apply_code", length: 50 })
  applyCode: string;

  @Column("varchar", { name: "match_key", length: 30 })
  matchKey: string;

  @Column("mediumtext", { name: "addinfo", nullable: true })
  addinfo: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;
}
