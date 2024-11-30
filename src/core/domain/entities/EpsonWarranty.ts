import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("ordernum", ["ordernum", "basketNum"], {})
@Index("provider", ["provider"], {})
@Index("pw_type", ["pwType"], {})
@Index("user_id", ["userId", "msUid", "serialNum"], {})
@Index("user_type", ["userId", "pwType"], {})
@Entity("epson_warranty", { schema: "makeshop" })
export class EpsonWarranty {
  @PrimaryGeneratedColumn({ type: "int", name: "pw_uid", unsigned: true })
  pwUid: number;

  @Column("enum", {
    name: "pw_type",
    enum: ["", "PREPAID", "POSTPAID"],
    default: () => "'PREPAID'",
  })
  pwType: "" | "PREPAID" | "POSTPAID";

  @Column("varchar", { name: "user_id", length: 50 })
  userId: string;

  @Column("int", { name: "ms_uid", unsigned: true, default: () => "'0'" })
  msUid: number;

  @Column("varchar", { name: "serial_num", length: 20 })
  serialNum: string;

  @Column("varchar", { name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "basket_num", unsigned: true, default: () => "'0'" })
  basketNum: number;

  @Column("int", { name: "manage_count", unsigned: true, default: () => "'0'" })
  manageCount: number;

  @Column("mediumint", {
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;

  @Column("varchar", { name: "product_addinfo", length: 255 })
  productAddinfo: string;

  @Column("int", {
    name: "last_black_count",
    unsigned: true,
    default: () => "'0'",
  })
  lastBlackCount: number;

  @Column("int", {
    name: "last_color_count",
    unsigned: true,
    default: () => "'0'",
  })
  lastColorCount: number;

  @Column("varchar", { name: "warranty_status", length: 10 })
  warrantyStatus: string;

  @Column("int", {
    name: "warranty_period",
    unsigned: true,
    default: () => "'0'",
  })
  warrantyPeriod: number;

  @Column("int", {
    name: "warranty_unit",
    unsigned: true,
    default: () => "'0'",
  })
  warrantyUnit: number;

  @Column("date", { name: "warranty_sdate", default: () => "'0000-00-00'" })
  warrantySdate: string;

  @Column("date", { name: "warranty_edate", default: () => "'0000-00-00'" })
  warrantyEdate: string;

  @Column("varchar", { name: "contract_image", length: 100 })
  contractImage: string;

  @Column("varchar", { name: "company_name", length: 100 })
  companyName: string;

  @Column("mediumtext", { name: "comment" })
  comment: string;

  @Column("datetime", {
    name: "auth_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  authDate: Date;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
