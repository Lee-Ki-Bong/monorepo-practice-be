import { Column, Entity } from "typeorm";

@Entity("user_privacy", { schema: "makeshop" })
export class UserPrivacy {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", {
    primary: true,
    name: "pi_uid",
    unsigned: true,
    default: () => "'0'",
  })
  piUid: number;

  @Column("varchar", { name: "pi_items", length: 255 })
  piItems: string;

  @Column("varchar", { name: "pi_codes", length: 255 })
  piCodes: string;

  @Column("enum", {
    name: "up_agree",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  upAgree: "" | "Y" | "N";

  @Column("datetime", {
    name: "up_agree_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  upAgreeDate: Date;
}
