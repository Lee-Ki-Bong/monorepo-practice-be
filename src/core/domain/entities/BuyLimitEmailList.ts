import { Column, Entity } from "typeorm";

@Entity("buy_limit_email_list", { schema: "makeshop" })
export class BuyLimitEmailList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "uid", default: () => "'0'" })
  uid: number;

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
