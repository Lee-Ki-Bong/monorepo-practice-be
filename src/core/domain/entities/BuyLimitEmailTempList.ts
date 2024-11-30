import { Column, Entity } from "typeorm";

@Entity("buy_limit_email_temp_list", { schema: "makeshop" })
export class BuyLimitEmailTempList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { primary: true, name: "email", length: 100 })
  email: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "file_path", length: 255 })
  filePath: string;
}
