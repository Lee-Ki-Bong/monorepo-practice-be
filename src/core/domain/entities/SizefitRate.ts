import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sr_uid", ["srUid"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("sizefit_rate", { schema: "makeshop" })
export class SizefitRate {
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

  @PrimaryGeneratedColumn({ type: "int", name: "sr_uid", unsigned: true })
  srUid: number;

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
}
