import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("xparser_fetch_deleted_data_log", { schema: "makeshop" })
export class XparserFetchDeletedDataLog {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "shop_id", length: 20 })
  shopId: string;

  @Column("char", { name: "mode", length: 3, default: () => "'ADD'" })
  mode: string;

  @Column("int", { name: "del_num", default: () => "'0'" })
  delNum: number;

  @Column("mediumtext", { name: "pid_text", nullable: true })
  pidText: string | null;

  @Column("datetime", {
    name: "del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  delDate: Date;
}
