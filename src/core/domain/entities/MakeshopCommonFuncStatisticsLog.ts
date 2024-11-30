import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("makeshop_common_func_statistics_log", { schema: "makeshop" })
export class MakeshopCommonFuncStatisticsLog {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "shop_id", length: 20 })
  shopId: string;

  @Column("varchar", { name: "call_page", length: 255 })
  callPage: string;

  @Column("varchar", { name: "func_name", length: 20 })
  funcName: string;

  @Column("varchar", {
    name: "func_ver",
    length: 30,
    default: () => "'0.00.00'",
  })
  funcVer: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
