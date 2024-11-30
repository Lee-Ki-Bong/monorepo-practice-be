import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cgl_uid", ["cglUid"], {})
@Entity("change_group_logs", { schema: "makeshop" })
export class ChangeGroupLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "cgl_uid", unsigned: true })
  cglUid: number;

  @Column("varchar", { primary: true, name: "cgl_adminuser", length: 12 })
  cglAdminuser: string;

  @Column("varchar", { name: "cgl_sub_id", nullable: true, length: 12 })
  cglSubId: string | null;

  @Column("varchar", { primary: true, name: "cgl_user_id", length: 20 })
  cglUserId: string;

  @Column("varchar", { name: "cgl_prev", length: 4 })
  cglPrev: string;

  @Column("varchar", { name: "cgl_next", length: 4 })
  cglNext: string;

  @Column("char", { name: "cgl_target", length: 3 })
  cglTarget: string;

  @Column("datetime", {
    name: "cgl_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  cglRegDate: Date;
}
