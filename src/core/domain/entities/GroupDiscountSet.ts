import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("group_discount_set", { schema: "makeshop" })
export class GroupDiscountSet {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("int", { primary: true, name: "product_uid", default: () => "'0'" })
  productUid: number;

  @Column("enum", {
    name: "price_unit",
    enum: ["", "price", "percent"],
    default: () => "'price'",
  })
  priceUnit: "" | "price" | "percent";

  @Column("int", { name: "price", unsigned: true, default: () => "'0'" })
  price: number;

  @Column("char", { name: "cut_position", length: 1, default: () => "'0'" })
  cutPosition: string;

  @Column("enum", {
    name: "cut_option",
    nullable: true,
    enum: ["", "ceil", "round", "floor"],
    default: () => "'ceil'",
  })
  cutOption: "" | "ceil" | "round" | "floor" | null;

  @Column("varchar", { name: "usergroup_code", nullable: true, length: 4 })
  usergroupCode: string | null;

  @Column("enum", {
    name: "duplicate_discount",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  duplicateDiscount: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "apply_option_price",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  applyOptionPrice: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "guest_view_price",
    nullable: true,
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  guestViewPrice: "" | "N" | "Y" | null;
}
