import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("h_date", ["adminuser", "startDate", "endDate"], {})
@Index("h_state", ["adminuser", "status"], {})
@Index("idx_auto_id", ["id"], {})
@Entity("welcome_deal_setting", { schema: "makeshop" })
export class WelcomeDealSetting {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("datetime", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("datetime", {
    name: "reg_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date | null;

  @Column("datetime", {
    name: "mod_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date | null;

  @Column("varchar", { name: "reg_admin_id", length: 12 })
  regAdminId: string;

  @Column("char", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("tinyint", {
    name: "main_product",
    nullable: true,
    default: () => "'1'",
  })
  mainProduct: number | null;
}
