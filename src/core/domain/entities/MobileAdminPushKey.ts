import { Column, Entity } from "typeorm";

@Entity("mobile_admin_push_key", { schema: "makeshop" })
export class MobileAdminPushKey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "device_key", length: 40 })
  deviceKey: string;

  @Column("varchar", { primary: true, name: "sub_id", length: 20 })
  subId: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
