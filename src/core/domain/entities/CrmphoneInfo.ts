import { Column, Entity } from "typeorm";

@Entity("crmphone_info", { schema: "makeshop" })
export class CrmphoneInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "kt_id", length: 255 })
  ktId: string;

  @Column("varchar", { name: "kt_passwd", length: 255 })
  ktPasswd: string;

  @Column("varchar", { name: "authcode", length: 255 })
  authcode: string;

  @Column("varchar", { name: "authpwd", length: 255 })
  authpwd: string;
}
