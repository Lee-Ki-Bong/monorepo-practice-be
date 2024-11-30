import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_user_check_info", { schema: "makeshop" })
export class UserCheckInfo {
  @PrimaryGeneratedColumn({ type: "smallint", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { name: "check_name", length: 30 })
  checkName: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("datetime", { name: "complete_date", nullable: true })
  completeDate: Date | null;

  @Column("longtext", { name: "check_desc", nullable: true })
  checkDesc: string | null;
}
