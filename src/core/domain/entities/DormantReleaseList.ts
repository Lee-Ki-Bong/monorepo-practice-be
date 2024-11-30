import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dormant_release_list", { schema: "makeshop" })
export class DormantReleaseList {
  @PrimaryGeneratedColumn({ type: "int", name: "log_id", unsigned: true })
  logId: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "type", length: 10 })
  type: string;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "email", length: 30 })
  email: string;

  @Column("varchar", { name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "sdate", length: 20 })
  sdate: string;

  @Column("varchar", { name: "edate", length: 20 })
  edate: string;

  @Column("int", { name: "total_count", unsigned: true, default: () => "'0'" })
  totalCount: number;

  @Column("int", { name: "res_count", unsigned: true, default: () => "'0'" })
  resCount: number;

  @Column("varchar", { name: "status", length: 10 })
  status: string;

  @Column("varchar", { name: "exe_date", length: 20 })
  exeDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "res_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  resDate: Date;
}
