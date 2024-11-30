import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sc_uid", ["scUid"], {})
@Index("stats_type", ["statsType", "uid", "regDate", "cartType"], {})
@Entity("stats_cart", { schema: "makeshop" })
export class StatsCart {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sc_uid", unsigned: true })
  scUid: number;

  @Column("varchar", { name: "tempid", nullable: true, length: 32 })
  tempid: string | null;

  @Column("enum", {
    name: "stats_type",
    enum: ["", "cherrypicker", "paparazzi"],
    default: () => "'cherrypicker'",
  })
  statsType: "" | "cherrypicker" | "paparazzi";

  @Column("enum", {
    name: "cart_type",
    enum: ["", "cart", "wish"],
    default: () => "'cart'",
  })
  cartType: "" | "cart" | "wish";

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("date", { name: "reg_date", default: () => "'0000-00-00'" })
  regDate: string;
}
