import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_rc_idx", ["rcIdx"], {})
@Index("index_reg_date", ["adminuser", "rIdx", "rcRegDate"], {})
@Index("index_userid", ["adminuser", "rIdx", "rcUserId"], {})
@Entity("roulette_comment", { schema: "makeshop" })
export class RouletteComment {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "r_idx",
    unsigned: true,
    default: () => "'0'",
  })
  rIdx: number;

  @PrimaryGeneratedColumn({ type: "int", name: "rc_idx", unsigned: true })
  rcIdx: number;

  @Column("int", { name: "rb_idx", unsigned: true, default: () => "'0'" })
  rbIdx: number;

  @Column("int", { name: "ru_idx", unsigned: true, default: () => "'0'" })
  ruIdx: number;

  @Column("varchar", { name: "rc_user_id", length: 40 })
  rcUserId: string;

  @Column("enum", {
    name: "rc_device",
    enum: ["", "PC", "MOBILE", "APP"],
    default: () => "'PC'",
  })
  rcDevice: "" | "PC" | "MOBILE" | "APP";

  @Column("datetime", {
    name: "rc_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rcRegDate: Date;

  @Column("varchar", { name: "rc_text", length: 200 })
  rcText: string;

  @Column("varchar", { name: "rc_ip", length: 15 })
  rcIp: string;
}
