import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_basic", ["adminuser", "userType", "resno", "cid"], {})
@Index("idx_sns", ["adminuser", "userType", "snsType", "snsId"], {})
@Entity("exitday", { schema: "makeshop" })
export class Exitday {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "regid" })
  regid: number;

  @Column("enum", {
    name: "user_type",
    enum: ["", "BASIC", "SNS"],
    default: () => "'BASIC'",
  })
  userType: "" | "BASIC" | "SNS";

  @Column("varchar", { name: "date", length: 8 })
  date: string;

  @Column("varchar", { name: "resno", length: 50 })
  resno: string;

  @Column("varchar", { name: "cid", length: 88 })
  cid: string;

  @Column("varchar", { name: "did", length: 64 })
  did: string;

  @Column("char", { name: "sns_type", length: 2 })
  snsType: string;

  @Column("varchar", { name: "sns_id", length: 255 })
  snsId: string;

  @Column("varchar", { name: "delete_date", nullable: true, length: 8 })
  deleteDate: string | null;
}
