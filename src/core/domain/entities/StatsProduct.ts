import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sp_uid", ["spUid"], {})
@Index("stats_type", ["statsType", "uid", "regDate"], {})
@Entity("stats_product", { schema: "makeshop" })
export class StatsProduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sp_uid", unsigned: true })
  spUid: number;

  @Column("enum", {
    name: "stats_type",
    enum: ["", "all", "cherrypicker", "paparazzi", "retarget_list"],
    default: () => "'all'",
  })
  statsType: "" | "all" | "cherrypicker" | "paparazzi" | "retarget_list";

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("date", { name: "reg_date", default: () => "'0000-00-00'" })
  regDate: string;

  @Column("int", { name: "cnt_view", unsigned: true, default: () => "'1'" })
  cntView: number;
}
