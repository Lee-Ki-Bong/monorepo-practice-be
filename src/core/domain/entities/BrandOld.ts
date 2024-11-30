import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser", "brandcode"], { unique: true })
@Index("adminuser_2", ["adminuser", "brandRegisterType"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index("moddate", ["adminuser", "moddate"], {})
@Index("option_type", ["adminuser", "optionType"], {})
@Index("provider", ["adminuser", "provider"], {})
@Index("regdate", ["adminuser", "regdate"], {})
@Entity("brand_old", { schema: "makeshop" })
export class BrandOld {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @Column("char", { name: "cate1", nullable: true, length: 3 })
  cate1: string | null;

  @Column("char", { name: "cate2", nullable: true, length: 3 })
  cate2: string | null;

  @Column("char", { name: "cate3", nullable: true, length: 3 })
  cate3: string | null;

  @Column("varchar", { name: "brandname", nullable: true, length: 255 })
  brandname: string | null;

  @Column("varchar", { name: "supplyname", nullable: true, length: 255 })
  supplyname: string | null;

  @Column("int", { name: "consumerprice", nullable: true })
  consumerprice: number | null;

  @Column("int", { name: "sellprice", nullable: true })
  sellprice: number | null;

  @Column("varchar", { name: "optionprice", nullable: true, length: 250 })
  optionprice: string | null;

  @Column("int", { name: "buyprice", nullable: true })
  buyprice: number | null;

  @Column("varchar", { name: "production", nullable: true, length: 20 })
  production: string | null;

  @Column("varchar", { name: "origin", nullable: true, length: 30 })
  origin: string | null;

  @Column("varchar", { name: "brname", nullable: true, length: 50 })
  brname: string | null;

  @Column("varchar", { name: "model", nullable: true, length: 50 })
  model: string | null;

  @Column("mediumint", { name: "weight", nullable: true, unsigned: true })
  weight: number | null;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("varchar", { name: "maximage", nullable: true, length: 25 })
  maximage: string | null;

  @Column("varchar", { name: "minimage", nullable: true, length: 25 })
  minimage: string | null;

  @Column("varchar", { name: "tinyimage", nullable: true, length: 25 })
  tinyimage: string | null;

  @Column("char", { name: "special", nullable: true, length: 1 })
  special: string | null;

  @Column("varchar", { name: "summary", nullable: true, length: 100 })
  summary: string | null;

  @Column("enum", {
    name: "option_type",
    enum: ["", "NO", "NU", "NL", "OC", "PC", "PP", "PS"],
    default: () => "'NO'",
  })
  optionType: "" | "NO" | "NU" | "NL" | "OC" | "PC" | "PP" | "PS";

  @Column("varchar", { name: "spcode", nullable: true, length: 250 })
  spcode: string | null;

  @Column("varchar", { name: "spcode2", nullable: true, length: 250 })
  spcode2: string | null;

  @Column("varchar", { name: "spcnt", nullable: true, length: 255 })
  spcnt: string | null;

  @Column("varchar", { name: "etctype", nullable: true, length: 255 })
  etctype: string | null;

  @Column("varchar", { name: "addcode", nullable: true, length: 200 })
  addcode: string | null;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("mediumint", { name: "provider", nullable: true, unsigned: true })
  provider: number | null;

  @Column("char", {
    name: "deli",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deli: string | null;

  @Column("enum", {
    name: "ems_type",
    enum: ["", "DEFAULT", "KOR_ONLY", "OVERSEAS"],
    default: () => "'DEFAULT'",
  })
  emsType: "" | "DEFAULT" | "KOR_ONLY" | "OVERSEAS";

  @Column("varchar", { name: "hscode", length: 10 })
  hscode: string;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  display: string | null;

  @Column("mediumint", {
    name: "sellcount",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sellcount: number | null;

  @Column("datetime", {
    name: "selldate",
    default: () => "'0000-00-00 00:00:00'",
  })
  selldate: Date;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;

  @Column("enum", {
    name: "brand_register_type",
    enum: ["", "makeshop", "makeb2b"],
    default: () => "'makeshop'",
  })
  brandRegisterType: "" | "makeshop" | "makeb2b";

  @Column("int", { name: "b2b_uid", nullable: true, unsigned: true })
  b2bUid: number | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("longtext", { name: "content2", nullable: true })
  content2: string | null;
}
