import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code", ["adminuser", "pcCode"], {})
@Index("idx_auto_pc_id", ["pcId"], {})
@Index("pc_status", ["adminuser", "pcStatus"], {})
@Index("pc_type", ["adminuser", "pcType"], {})
@Entity("provider_calculate", { schema: "makeshop" })
export class ProviderCalculate {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "pc_id", unsigned: true })
  pcId: number;

  @Column("varchar", { name: "pc_code", length: 13 })
  pcCode: string;

  @Column("mediumint", {
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;

  @Column("enum", {
    name: "pc_type",
    enum: ["", "AUTO", "HAND", "REFUND"],
    default: () => "'AUTO'",
  })
  pcType: "" | "AUTO" | "HAND" | "REFUND";

  @Column("enum", {
    name: "pc_status",
    enum: ["", "REQUEST", "DONE", "CANCEL"],
    default: () => "'REQUEST'",
  })
  pcStatus: "" | "REQUEST" | "DONE" | "CANCEL";

  @Column("datetime", {
    name: "req_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  reqDate: Date;

  @Column("datetime", {
    name: "cal_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  calDate: Date;

  @Column("enum", {
    name: "cal_type",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  calType: "" | "Y" | "N";
}
