import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("product_discount", { schema: "makeshop" })
export class ProductDiscount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("enum", {
    name: "sale_type",
    enum: ["", "new_by_time", "new_by_date", "rebuy", "term", "hidden"],
    default: () => "'new_by_date'",
  })
  saleType: "" | "new_by_time" | "new_by_date" | "rebuy" | "term" | "hidden";

  @Column("set", {
    name: "use_path",
    enum: ["PC", "MOBILE"],
    default: () => ["PC", "MOBILE"],
  })
  usePath: ("PC" | "MOBILE")[];

  @Column("set", {
    name: "use_reserve",
    enum: ["USE", "PC", "MOBILE"],
    default: () => ["USE"],
  })
  useReserve: ("USE" | "PC" | "MOBILE")[];

  @Column("enum", {
    name: "cross_display",
    enum: ["", "YES", "NO"],
    default: () => "'YES'",
  })
  crossDisplay: "" | "YES" | "NO";

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;

  @Column("enum", {
    name: "period_ok",
    enum: ["", "reg", "mod", "display"],
    default: () => "'reg'",
  })
  periodOk: "" | "reg" | "mod" | "display";

  @Column("int", { name: "period", nullable: true, unsigned: true })
  period: number | null;

  @Column("enum", {
    name: "price_unit",
    enum: ["", "price", "percent"],
    default: () => "'price'",
  })
  priceUnit: "" | "price" | "percent";

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;

  @Column("enum", {
    name: "icon",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  icon: "" | "Y" | "N" | null;

  @Column("char", { name: "cut_position", length: 1, default: () => "'0'" })
  cutPosition: string;

  @Column("enum", {
    name: "cut_option",
    enum: ["", "ceil", "round", "floor"],
    default: () => "'ceil'",
  })
  cutOption: "" | "ceil" | "round" | "floor";

  @Column("enum", {
    name: "option_apply",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  optionApply: "" | "Y" | "N";

  @Column("enum", {
    name: "user_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  userType: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "view_price",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'N'",
  })
  viewPrice: "" | "Y" | "N" | "A" | null;

  @Column("enum", {
    name: "option_type",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  optionType: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "pro_reserve",
    nullable: true,
    enum: ["", "Y", "N", "A"],
    default: () => "'Y'",
  })
  proReserve: "" | "Y" | "N" | "A" | null;

  @Column("enum", {
    name: "recmd_reserve",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  recmdReserve: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "recmd_coupon",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  recmdCoupon: "" | "Y" | "N" | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("longtext", { name: "description_d4", nullable: true })
  descriptionD4: string | null;

  @Column("enum", {
    name: "except_coupon",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptCoupon: "" | "Y" | "N";

  @Column("enum", {
    name: "except_group",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  exceptGroup: "" | "Y" | "N";

  @Column("enum", {
    name: "trans_discount_remain",
    enum: ["", "N", "Y"],
    default: () => "'Y'",
  })
  transDiscountRemain: "" | "N" | "Y";

  @Column("varchar", { name: "discount_week", length: 200 })
  discountWeek: string;

  @Column("int", { name: "succession_uid", nullable: true })
  successionUid: number | null;

  @Column("varchar", { name: "remark", length: 255 })
  remark: string;
}
