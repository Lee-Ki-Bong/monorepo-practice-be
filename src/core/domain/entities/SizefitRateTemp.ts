import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_temp_id", ["tempId"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("sizefit_rate_temp", { schema: "makeshop" })
export class SizefitRateTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "sf_uid",
    unsigned: true,
    default: () => "'0'",
  })
  sfUid: number;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "temp_id", unsigned: true })
  tempId: number;

  @Column("varchar", { name: "sr_type", length: 20, default: () => "'TEXT'" })
  srType: string;

  @Column("varchar", { name: "sr_no", length: 10 })
  srNo: string;

  @Column("mediumtext", { name: "sr_answer" })
  srAnswer: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("char", { name: "page_no", length: 1 })
  pageNo: string;

  @Column("varchar", { name: "temp_key", length: 20 })
  tempKey: string;
}
