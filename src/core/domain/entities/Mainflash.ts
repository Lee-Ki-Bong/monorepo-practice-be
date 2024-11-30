import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Entity("mainflash", { schema: "makeshop" })
export class Mainflash {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("int", { name: "type", default: () => "'0'" })
  type: number;

  @Column("enum", {
    name: "random_type",
    nullable: true,
    enum: ["", "Y", "N", "S"],
    default: () => "'N'",
  })
  randomType: "" | "Y" | "N" | "S" | null;

  @Column("char", {
    name: "titletype",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  titletype: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("char", { name: "fonttype", nullable: true, length: 2 })
  fonttype: string | null;

  @Column("char", {
    name: "fontbold",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  fontbold: string | null;

  @Column("varchar", { name: "fontcolor", nullable: true, length: 6 })
  fontcolor: string | null;

  @Column("varchar", { name: "tibgcolor", nullable: true, length: 6 })
  tibgcolor: string | null;

  @Column("int", {
    name: "productnum1",
    nullable: true,
    unsigned: true,
    default: () => "'4'",
  })
  productnum1: number | null;

  @Column("int", {
    name: "productnum2",
    nullable: true,
    unsigned: true,
    default: () => "'2'",
  })
  productnum2: number | null;

  @Column("int", {
    name: "imgxsize",
    nullable: true,
    unsigned: true,
    default: () => "'100'",
  })
  imgxsize: number | null;

  @Column("int", {
    name: "imgysize",
    nullable: true,
    unsigned: true,
    default: () => "'100'",
  })
  imgysize: number | null;

  @Column("char", {
    name: "btn_num",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  btnNum: string | null;

  @Column("varchar", { name: "ardollar", nullable: true, length: 30 })
  ardollar: string | null;

  @Column("varchar", { name: "effect", nullable: true, length: 40 })
  effect: string | null;

  @Column("char", {
    name: "effecttime",
    nullable: true,
    length: 2,
    default: () => "'1'",
  })
  effecttime: string | null;

  @Column("char", {
    name: "backimg",
    nullable: true,
    length: 2,
    default: () => "'0'",
  })
  backimg: string | null;

  @Column("varchar", { name: "boxbgcolor", nullable: true, length: 6 })
  boxbgcolor: string | null;

  @Column("varchar", { name: "bgcolor", nullable: true, length: 6 })
  bgcolor: string | null;

  @Column("varchar", { name: "boxcolor", nullable: true, length: 6 })
  boxcolor: string | null;

  @Column("varchar", { name: "productcolor", nullable: true, length: 6 })
  productcolor: string | null;

  @Column("varchar", { name: "pricecolor", nullable: true, length: 6 })
  pricecolor: string | null;

  @Column("char", {
    name: "consumer",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  consumer: string | null;

  @Column("varchar", { name: "consumercolor", nullable: true, length: 6 })
  consumercolor: string | null;

  @Column("char", {
    name: "consumerln",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  consumerln: string | null;

  @Column("char", {
    name: "pastel",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pastel: string | null;

  @Column("int", { name: "widthpixel", nullable: true, default: () => "'0'" })
  widthpixel: number | null;

  @Column("varchar", { name: "linecolor", nullable: true, length: 6 })
  linecolor: string | null;

  @Column("char", {
    name: "display",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  display: string | null;

  @Column("mediumtext", { name: "product", nullable: true })
  product: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 16 })
  date: string | null;
}
