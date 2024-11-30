import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_se_idx", ["seIdx"], {})
@Index("index_serial_key", ["adminuser", "seKey"], {})
@Index("index_userid", ["adminuser", "selIdx", "userId"], {})
@Entity("smart_coupon_serial", { schema: "makeshop" })
export class SmartCouponSerial {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "se_idx", unsigned: true })
  seIdx: number;

  @Column("int", { name: "sel_idx", unsigned: true, default: () => "'0'" })
  selIdx: number;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("varchar", { name: "se_key", length: 40 })
  seKey: string;

  @Column("enum", {
    name: "se_register_device",
    enum: ["", "PC", "MOBILE", "APP"],
    default: () => "'PC'",
  })
  seRegisterDevice: "" | "PC" | "MOBILE" | "APP";

  @Column("varchar", { name: "se_register_page", length: 10 })
  seRegisterPage: string;

  @Column("datetime", {
    name: "se_issue_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  seIssueDate: Date;
}
