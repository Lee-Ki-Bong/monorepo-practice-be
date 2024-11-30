import { Column, Entity, Index } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Entity("instantpot_genuine", { schema: "makeshop" })
export class InstantpotGenuine {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("int", { primary: true, name: "idx", unsigned: true })
  idx: number;

  @Column("varchar", { name: "ig_sku_no", length: 50 })
  igSkuNo: string;

  @Column("varchar", { name: "ig_model", length: 50 })
  igModel: string;

  @Column("datetime", {
    name: "ig_buydate",
    default: () => "'0000-00-00 00:00:00'",
  })
  igBuydate: Date;

  @Column("varchar", { name: "ig_buyplace", length: 20 })
  igBuyplace: string;

  @Column("varchar", { name: "ig_buyplace_detail", length: 50 })
  igBuyplaceDetail: string;

  @Column("varchar", { name: "ig_image", length: 10 })
  igImage: string;

  @Column("enum", {
    name: "ig_status",
    enum: ["", "S", "Y", "N"],
    default: () => "'S'",
  })
  igStatus: "" | "S" | "Y" | "N";

  @Column("varchar", { name: "ig_reject", nullable: true, length: 10 })
  igReject: string | null;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;
}
