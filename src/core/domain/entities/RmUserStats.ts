import { Column, Entity } from "typeorm";

@Entity("rm_user_stats", { schema: "makeshop" })
export class RmUserStats {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", {
    primary: true,
    name: "rs_date",
    default: () => "'0000-00-00'",
  })
  rsDate: string;

  @Column("enum", {
    primary: true,
    name: "rs_path",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  rsPath: "" | "WEB" | "MOBILE";

  @Column("int", { name: "rs_rm_join_cnt", default: () => "'0'" })
  rsRmJoinCnt: number;

  @Column("int", { name: "rs_rm_benefit", default: () => "'0'" })
  rsRmBenefit: number;

  @Column("int", { name: "rs_total_join_cnt", default: () => "'0'" })
  rsTotalJoinCnt: number;

  @Column("datetime", {
    name: "rs_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  rsRegdate: Date;
}
