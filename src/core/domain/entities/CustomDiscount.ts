import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cd_idx", ["cdIdx"], {})
@Entity("custom_discount", { schema: "makeshop" })
export class CustomDiscount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cd_idx", unsigned: true })
  cdIdx: number;

  @Column("varchar", { name: "cd_title", length: 255 })
  cdTitle: string;

  @Column("varchar", { name: "cd_type", length: 50 })
  cdType: string;

  @Column("varchar", {
    name: "cd_view_type",
    length: 10,
    default: () => "'NONE'",
  })
  cdViewType: string;

  @Column("varchar", { name: "cd_use", length: 10 })
  cdUse: string;

  @Column("varchar", { name: "cd_target", length: 10 })
  cdTarget: string;

  @Column("datetime", {
    name: "cd_start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdStartDate: Date;

  @Column("datetime", {
    name: "cd_end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdEndDate: Date;

  @Column("int", { name: "cd_cate_discount_price", default: () => "'0'" })
  cdCateDiscountPrice: number;

  @Column("varchar", { name: "cd_cate_discount_price_type", length: 10 })
  cdCateDiscountPriceType: string;

  @Column("varchar", { name: "cd_reg_id", length: 50 })
  cdRegId: string;

  @Column("datetime", {
    name: "cd_update_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdUpdateDate: Date;

  @Column("datetime", {
    name: "cd_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cdRegDate: Date;
}
