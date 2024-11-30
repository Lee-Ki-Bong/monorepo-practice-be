import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sch_idx", ["schIdx"], {})
@Entity("smart_coupon_history", { schema: "makeshop" })
export class SmartCouponHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "couponnum", length: 8 })
  couponnum: string;

  @Column("mediumint", {
    primary: true,
    name: "sch_provider_code",
    unsigned: true,
    default: () => "'0'",
  })
  schProviderCode: number;

  @PrimaryGeneratedColumn({ type: "int", name: "sch_idx", unsigned: true })
  schIdx: number;

  @Column("enum", {
    name: "sch_admin_type",
    enum: ["", "SHOP", "PROVIDER"],
    default: () => "'SHOP'",
  })
  schAdminType: "" | "SHOP" | "PROVIDER";

  @Column("varchar", { name: "sch_admin_id", length: 12 })
  schAdminId: string;

  @Column("mediumtext", { name: "sch_content", nullable: true })
  schContent: string | null;

  @Column("datetime", {
    name: "sch_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  schDate: Date;
}
