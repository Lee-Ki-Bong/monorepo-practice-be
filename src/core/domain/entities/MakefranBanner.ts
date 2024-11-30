import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("makefran_banner", { schema: "makeshop" })
export class MakefranBanner {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "type", length: 20 })
  type: string;

  @Column("varchar", { name: "text", length: 150 })
  text: string;

  @Column("varchar", { name: "migration_text", length: 60 })
  migrationText: string;

  @Column("int", {
    name: "migration_num",
    unsigned: true,
    default: () => "'0'",
  })
  migrationNum: number;

  @Column("varchar", { name: "text_short", length: 100 })
  textShort: string;

  @Column("text", { name: "link" })
  link: string;

  @Column("varchar", {
    name: "link_target",
    length: 10,
    default: () => "'_blank'",
  })
  linkTarget: string;

  @Column("varchar", { name: "img", length: 255 })
  img: string;

  @Column("datetime", {
    name: "startdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  startdate: Date;

  @Column("datetime", {
    name: "enddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  enddate: Date;

  @Column("varchar", { name: "shop_category", length: 30 })
  shopCategory: string;

  @Column("int", { name: "shop_num", unsigned: true, default: () => "'0'" })
  shopNum: number;
}
