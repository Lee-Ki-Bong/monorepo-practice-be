import { Column, Entity } from "typeorm";

@Entity("kakaopay_info", { schema: "makeshop" })
export class KakaopayInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "kakaopay_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  kakaopayUse: "" | "Y" | "N";

  @Column("enum", {
    name: "buycart",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  buycart: "" | "Y" | "N";

  @Column("char", { name: "button_type", nullable: true, length: 2 })
  buttonType: string | null;

  @Column("char", { name: "mobile_button_type", nullable: true, length: 2 })
  mobileButtonType: string | null;

  @Column("text", { name: "deny_code", nullable: true })
  denyCode: string | null;

  @Column("mediumtext", { name: "deny_uid", nullable: true })
  denyUid: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
