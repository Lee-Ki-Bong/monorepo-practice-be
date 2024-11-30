import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("barotalk_benefit_log", { schema: "makeshop" })
export class BarotalkBenefitLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("int", { name: "benefit_data", nullable: true })
  benefitData: number | null;

  @Column("enum", {
    name: "benefit_type",
    nullable: true,
    enum: ["", "reserve", "point"],
    default: () => "'reserve'",
  })
  benefitType: "" | "reserve" | "point" | null;
}
