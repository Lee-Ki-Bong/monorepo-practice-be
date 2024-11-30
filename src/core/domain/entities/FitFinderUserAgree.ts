import { Column, Entity } from "typeorm";

@Entity("fit_finder_user_agree", { schema: "makeshop" })
export class FitFinderUserAgree {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("datetime", {
    name: "agree_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  agreeDate: Date;
}
