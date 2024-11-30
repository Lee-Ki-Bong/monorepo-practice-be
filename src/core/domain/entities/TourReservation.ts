import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tr_id", ["trId"], {})
@Entity("tour_reservation", { schema: "makeshop" })
export class TourReservation {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "tl_id", default: () => "'0'" })
  tlId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "tr_id", unsigned: true })
  trId: number;

  @Column("varchar", { name: "tr_user_id", length: 20 })
  trUserId: string;

  @Column("varchar", { name: "tr_company", length: 100 })
  trCompany: string;

  @Column("varchar", { name: "tr_phone", length: 13 })
  trPhone: string;

  @Column("datetime", {
    name: "tr_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  trDate: Date;

  @Column("int", { name: "tr_member", default: () => "'1'" })
  trMember: number;

  @Column("mediumtext", { name: "tr_add_info" })
  trAddInfo: string;

  @Column("enum", {
    name: "tr_status",
    enum: ["", "S", "R", "A", "C"],
    default: () => "'S'",
  })
  trStatus: "" | "S" | "R" | "A" | "C";

  @Column("datetime", {
    name: "tr_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  trRegDate: Date;

  @Column("datetime", {
    name: "tr_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  trModDate: Date;

  @Column("enum", {
    name: "tr_is_del",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  trIsDel: "" | "Y" | "N";

  @Column("datetime", {
    name: "tr_del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  trDelDate: Date;
}
