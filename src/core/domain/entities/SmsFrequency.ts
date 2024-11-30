import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sf_uid", ["sfUid"], {})
@Entity("sms_frequency", { schema: "makeshop" })
export class SmsFrequency {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 12 })
  subId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "sf_uid", unsigned: true })
  sfUid: number;

  @Column("mediumtext", { name: "sf_message" })
  sfMessage: string;

  @Column("enum", {
    name: "sf_lms",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sfLms: "" | "Y" | "N";

  @Column("enum", {
    name: "sf_advertise",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sfAdvertise: "" | "Y" | "N";

  @Column("enum", {
    name: "sf_reject",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  sfReject: "" | "Y" | "N";
}
