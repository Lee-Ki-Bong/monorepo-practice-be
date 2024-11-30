import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sc_uid", ["scUid"], {})
@Entity("sms_config", { schema: "makeshop" })
export class SmsConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sc_uid", unsigned: true })
  scUid: number;

  @Column("varchar", { name: "sc_name", length: 50 })
  scName: string;

  @Column("enum", {
    name: "sc_advertise",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scAdvertise: "" | "Y" | "N";

  @Column("enum", {
    name: "sc_reject",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scReject: "" | "Y" | "N";

  @Column("set", {
    name: "sc_range",
    nullable: true,
    enum: ["MEMBER", "GUEST"],
    default: () => ["MEMBER", "GUEST"],
  })
  scRange: ("MEMBER" | "GUEST")[] | null;
}
