import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("xparser_fetch_shop", { schema: "makeshop" })
export class XparserFetchShop {
  @PrimaryGeneratedColumn({ type: "int", name: "sid" })
  sid: number;

  @Column("varchar", { name: "shop_id", length: 20 })
  shopId: string;

  @Column("varchar", { name: "s_url", length: 120 })
  sUrl: string;

  @Column("varchar", {
    name: "s_type",
    length: 20,
    default: () => "'excelxml'",
  })
  sType: string;

  @Column("char", { name: "m_type", length: 1, default: () => "'F'" })
  mType: string;

  @Column("int", { name: "s_max", default: () => "'0'" })
  sMax: number;

  @Column("varchar", { name: "s_macro", length: 50 })
  sMacro: string;

  @Column("char", { name: "active", length: 1, default: () => "'T'" })
  active: string;

  @Column("int", { name: "ok_num", default: () => "'0'" })
  okNum: number;

  @Column("int", { name: "err_num", default: () => "'0'" })
  errNum: number;

  @Column("int", { name: "ist_err", default: () => "'0'" })
  istErr: number;

  @Column("varchar", { name: "user_file_name", length: 200 })
  userFileName: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "done_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  doneDate: Date;

  @Column("mediumtext", { name: "cs_log", nullable: true })
  csLog: string | null;
}
