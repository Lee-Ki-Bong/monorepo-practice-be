import { Column, Entity } from "typeorm";

@Entity("adminuser_confirm", { schema: "makeshop" })
export class AdminuserConfirm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "confirm_stat", length: 10 })
  confirmStat: string;

  @Column("int", { name: "com_res_no1", nullable: true })
  comResNo1: number | null;

  @Column("int", { name: "com_res_no2", nullable: true })
  comResNo2: number | null;

  @Column("int", { name: "com_res_no3", nullable: true })
  comResNo3: number | null;

  @Column("char", { name: "admin_status", length: 1, default: () => "'W'" })
  adminStatus: string;

  @Column("char", { name: "banner_status", length: 1, default: () => "'Y'" })
  bannerStatus: string;

  @Column("char", { name: "request_reconfirm", nullable: true, length: 2 })
  requestReconfirm: string | null;
}
