import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ru_idx", ["ruIdx"], {})
@Index("index_benefit", ["adminuser", "rIdx", "rbIdx"], {})
@Index("index_part_date", ["adminuser", "rIdx", "ruPartDate"], {})
@Index("index_userid", ["adminuser", "rIdx", "ruUserId"], {})
@Entity("roulette_user", { schema: "makeshop" })
export class RouletteUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "r_idx",
    unsigned: true,
    default: () => "'0'",
  })
  rIdx: number;

  @PrimaryGeneratedColumn({ type: "int", name: "ru_idx", unsigned: true })
  ruIdx: number;

  @Column("int", { name: "rb_idx", unsigned: true, default: () => "'0'" })
  rbIdx: number;

  @Column("varchar", { name: "ru_user_id", length: 40 })
  ruUserId: string;

  @Column("enum", {
    name: "ru_device",
    enum: ["", "PC", "MOBILE", "APP"],
    default: () => "'PC'",
  })
  ruDevice: "" | "PC" | "MOBILE" | "APP";

  @Column("datetime", {
    name: "ru_part_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  ruPartDate: Date;

  @Column("enum", {
    name: "ru_coupon_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ruCouponStatus: "" | "Y" | "N";

  @Column("varchar", { name: "ru_ip", length: 15 })
  ruIp: string;
}
