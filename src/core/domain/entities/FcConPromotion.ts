import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cp_id", ["cpId"], {})
@Entity("fc_con_promotion", { schema: "makeshop" })
export class FcConPromotion {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cp_id", unsigned: true })
  cpId: number;

  @Column("varchar", { name: "cp_date", length: 6 })
  cpDate: string;

  @Column("int", { name: "cp_reserve", default: () => "'0'" })
  cpReserve: number;

  @Column("int", { name: "cp_reserve2", default: () => "'0'" })
  cpReserve2: number;

  @Column("enum", {
    name: "cp_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  cpStatus: "" | "Y" | "N";

  @Column("datetime", {
    name: "cp_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  cpRegdate: Date;
}
