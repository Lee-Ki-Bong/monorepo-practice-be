import { Column, Entity } from "typeorm";

@Entity("md_subadmin", { schema: "makeshop" })
export class MdSubadmin {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "md_id", length: 12 })
  mdId: string;

  @Column("varchar", { primary: true, name: "submd_id", length: 12 })
  submdId: string;

  @Column("varchar", { name: "password", nullable: true, length: 128 })
  password: string | null;

  @Column("datetime", {
    name: "password_chg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  passwordChgDate: Date | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "ipaddress", nullable: true, length: 15 })
  ipaddress: string | null;

  @Column("char", {
    name: "sub_main",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subMain: string | null;

  @Column("char", {
    name: "sub_makeshop",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subMakeshop: string | null;

  @Column("char", {
    name: "sub_product",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subProduct: string | null;

  @Column("char", {
    name: "sub_orders",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subOrders: string | null;

  @Column("char", {
    name: "sub_price",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subPrice: string | null;

  @Column("char", {
    name: "sub_board",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subBoard: string | null;

  @Column("char", {
    name: "sub_coupon",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subCoupon: string | null;

  @Column("varchar", { name: "board_hname", nullable: true, length: 20 })
  boardHname: string | null;

  @Column("varchar", { name: "logindate", nullable: true, length: 14 })
  logindate: string | null;

  @Column("varchar", { name: "loginipaddress", nullable: true, length: 255 })
  loginipaddress: string | null;

  @Column("varchar", { name: "tempkey", nullable: true, length: 32 })
  tempkey: string | null;

  @Column("char", {
    name: "sub_excel_upload",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  subExcelUpload: string | null;
}
