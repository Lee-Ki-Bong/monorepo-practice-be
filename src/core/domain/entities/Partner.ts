import { Column, Entity, Index } from "typeorm";

@Index("id", ["adminuser", "id"], {})
@Entity("partner", { schema: "makeshop" })
export class Partner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("varchar", { name: "partner_name", nullable: true, length: 30 })
  partnerName: string | null;

  @Column("varchar", { name: "owner_name", nullable: true, length: 30 })
  ownerName: string | null;

  @Column("varchar", { name: "app_name", nullable: true, length: 30 })
  appName: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("varchar", { name: "company_post", nullable: true, length: 6 })
  companyPost: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("enum", {
    name: "use_type",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  useType: "" | "N" | "Y";

  @Column("char", { name: "standard_limit", length: 1 })
  standardLimit: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;

  @Column("datetime", {
    name: "login_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  loginDate: Date;

  @Column("int", { name: "order_avg_price", default: () => "'0'" })
  orderAvgPrice: number;
}
