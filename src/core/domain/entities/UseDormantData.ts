import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_ud_uid", ["udUid"], {})
@Entity("use_dormant_data", { schema: "makeshop" })
export class UseDormantData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ud_uid", unsigned: true })
  udUid: number;

  @Column("varchar", { name: "ud_name", length: 24 })
  udName: string;

  @Column("varchar", { name: "ud_email", length: 100 })
  udEmail: string;

  @Column("varchar", { name: "ud_ip", length: 20 })
  udIp: string;

  @Column("varchar", { name: "ud_admin", length: 12 })
  udAdmin: string;

  @Column("enum", {
    name: "ud_state",
    enum: ["", "HIDE", "SHOW"],
    default: () => "'SHOW'",
  })
  udState: "" | "HIDE" | "SHOW";

  @Column("datetime", { name: "date_insert", nullable: true })
  dateInsert: Date | null;
}
