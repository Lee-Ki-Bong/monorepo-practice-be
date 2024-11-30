import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("powerapp_push_benefit", { schema: "makeshop" })
export class PowerappPushBenefit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "rkey",
    unsigned: true,
    default: () => "'0'",
  })
  rkey: number;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "benefit_type",
    enum: ["", "NO", "COUPON", "CASH", "POINT"],
    default: () => "'NO'",
  })
  benefitType: "" | "NO" | "COUPON" | "CASH" | "POINT";

  @Column("mediumint", {
    name: "benefit_day",
    unsigned: true,
    default: () => "'0'",
  })
  benefitDay: number;

  @Column("varchar", { name: "benefit", nullable: true, length: 11 })
  benefit: string | null;

  @Column("datetime", {
    name: "benefit_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  benefitDate: Date | null;
}
