import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tl_id", ["tlId"], {})
@Entity("tour_list", { schema: "makeshop" })
export class TourList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tl_id", unsigned: true })
  tlId: number;

  @Column("enum", {
    name: "tl_type",
    enum: ["", "E", "S"],
    default: () => "'E'",
  })
  tlType: "" | "E" | "S";

  @Column("varchar", { name: "tl_name", length: 255 })
  tlName: string;

  @Column("date", { name: "tl_start_date", default: () => "'0000-00-00'" })
  tlStartDate: string;

  @Column("date", { name: "tl_end_date", default: () => "'0000-00-00'" })
  tlEndDate: string;

  @Column("mediumtext", { name: "tl_except_date" })
  tlExceptDate: string;

  @Column("mediumtext", { name: "tl_email" })
  tlEmail: string;

  @Column("mediumtext", { name: "tl_add_info" })
  tlAddInfo: string;

  @Column("mediumtext", { name: "tl_add_content" })
  tlAddContent: string;

  @Column("datetime", {
    name: "tl_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tlRegDate: Date;

  @Column("datetime", {
    name: "tl_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tlModDate: Date;
}
