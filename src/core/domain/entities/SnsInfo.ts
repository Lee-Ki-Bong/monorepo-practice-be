import { Column, Entity } from "typeorm";

@Entity("sns_info", { schema: "makeshop" })
export class SnsInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "sns_type", length: 3 })
  snsType: string;

  @Column("varchar", { name: "server", length: 20 })
  server: string;

  @Column("varchar", { name: "shopurl", length: 100 })
  shopurl: string;

  @Column("enum", {
    name: "status",
    nullable: true,
    enum: ["", "REQUEST", "WAIT", "COMPLETE"],
    default: () => "'REQUEST'",
  })
  status: "" | "REQUEST" | "WAIT" | "COMPLETE" | null;

  @Column("varchar", { name: "shop_key", length: 100 })
  shopKey: string;

  @Column("varchar", { name: "script_key", length: 100 })
  scriptKey: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
