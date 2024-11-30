import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status", ["status", "regDate"], {})
@Entity("br_api_logs", { schema: "makeshop" })
export class BrApiLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "method", length: 20 })
  method: string;

  @Column("mediumtext", { name: "params", nullable: true })
  params: string | null;

  @Column("enum", {
    name: "status",
    enum: ["", "W", "D"],
    default: () => "'W'",
  })
  status: "" | "W" | "D";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
