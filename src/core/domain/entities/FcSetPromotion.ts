import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sp_id", ["spId"], {})
@Entity("fc_set_promotion", { schema: "makeshop" })
export class FcSetPromotion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sp_id", unsigned: true })
  spId: number;

  @Column("varchar", { name: "sp_sdate", length: 8 })
  spSdate: string;

  @Column("varchar", { name: "sp_edate", length: 8 })
  spEdate: string;

  @Column("varchar", { name: "sp_uids", length: 255 })
  spUids: string;

  @Column("int", { name: "sp_reserve", default: () => "'0'" })
  spReserve: number;

  @Column("enum", {
    name: "sp_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  spStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "sp_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  spRegdate: Date;
}
