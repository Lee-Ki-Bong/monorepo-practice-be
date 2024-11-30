import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_so_uid", ["soUid"], {})
@Index("uid", ["uid", "regDate"], {})
@Entity("stats_order", { schema: "makeshop" })
export class StatsOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "so_uid", unsigned: true })
  soUid: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 50 })
  ordernum: string;

  @Column("varchar", { name: "tempid", nullable: true, length: 32 })
  tempid: string | null;

  @Column("enum", {
    primary: true,
    name: "stats_type",
    enum: ["", "all", "cherrypicker", "paparazzi", "retarget_list"],
    default: () => "'all'",
  })
  statsType: "" | "all" | "cherrypicker" | "paparazzi" | "retarget_list";

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("int", { name: "pay_price", default: () => "'0'" })
  payPrice: number;

  @Column("date", { name: "reg_date", default: () => "'0000-00-00'" })
  regDate: string;
}
