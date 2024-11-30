import { Column, Entity, Index } from "typeorm";

@Index("index_temp_date", ["adminuser", "snsTempDate"], {})
@Entity("sns_login_tempkey", { schema: "makeshop" })
export class SnsLoginTempkey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "sns_temp_key", length: 13 })
  snsTempKey: string;

  @Column("char", { name: "sns_temp_type", length: 2 })
  snsTempType: string;

  @Column("mediumtext", { name: "sns_temp_login_data" })
  snsTempLoginData: string;

  @Column("mediumtext", { name: "sns_temp_user_data" })
  snsTempUserData: string;

  @Column("datetime", {
    name: "sns_temp_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  snsTempDate: Date;
}
