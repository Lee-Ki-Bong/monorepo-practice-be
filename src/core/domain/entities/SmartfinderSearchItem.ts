import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_csi_id", ["csiId"], {})
@Index("psi_id", ["adminuser", "psiId"], { unique: true })
@Entity("smartfinder_search_item", { schema: "makeshop" })
export class SmartfinderSearchItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "csi_id", unsigned: true })
  csiId: number;

  @Column("int", { name: "psi_id", unsigned: true, default: () => "'0'" })
  psiId: number;

  @Column("varchar", { name: "psi_name", length: 255 })
  psiName: string;

  @Column("mediumint", { name: "csi_sort", default: () => "'0'" })
  csiSort: number;

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
