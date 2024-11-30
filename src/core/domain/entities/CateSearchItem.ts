import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_csi_id", ["csiId"], {})
@Index(
  "psi_id",
  ["adminuser", "cateType", "cate1", "cate2", "cate3", "psiId"],
  { unique: true }
)
@Entity("cate_search_item", { schema: "makeshop" })
export class CateSearchItem {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "cate_type",
    enum: ["", "NORMAL", "VIRTUAL"],
    default: () => "'NORMAL'",
  })
  cateType: "" | "NORMAL" | "VIRTUAL";

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @PrimaryGeneratedColumn({ type: "int", name: "csi_id", unsigned: true })
  csiId: number;

  @Column("int", { name: "psi_id", unsigned: true, default: () => "'0'" })
  psiId: number;

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
