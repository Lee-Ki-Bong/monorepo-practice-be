import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("xparser_fetch_failed_data_log", { schema: "makeshop" })
export class XparserFetchFailedDataLog {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("int", { name: "sid", default: () => "'0'" })
  sid: number;

  @Column("varchar", { name: "shop_id", length: 20 })
  shopId: string;

  @Column("int", { name: "rnum", default: () => "'0'" })
  rnum: number;

  @Column("int", { name: "rsum", default: () => "'0'" })
  rsum: number;
}
