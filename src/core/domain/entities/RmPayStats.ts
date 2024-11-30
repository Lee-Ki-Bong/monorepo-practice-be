import { Column, Entity } from "typeorm";

@Entity("rm_pay_stats", { schema: "makeshop" })
export class RmPayStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "rs_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  rsPath: "" | "WEB" | "MOBILE";

  @Column("date", {
    primary: true,
    name: "rs_date",
    default: () => "'0000-00-00'",
  })
  rsDate: string;

  @Column("int", { name: "rs_join_cnt", default: () => "'0'" })
  rsJoinCnt: number;

  @Column("int", { name: "rs_total_cnt", default: () => "'0'" })
  rsTotalCnt: number;

  @Column("datetime", {
    name: "rs_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  rsRegdate: Date;
}
