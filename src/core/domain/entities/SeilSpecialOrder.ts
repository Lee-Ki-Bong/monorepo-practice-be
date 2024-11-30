import { Column, Entity, Index } from "typeorm";

@Index("ordernum", ["adminuser", "ordernum"], {})
@Index("p_uid", ["adminuser", "partnerUid"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("seil_special_order", { schema: "makeshop" })
export class SeilSpecialOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "partner_uid", unsigned: true, default: () => "'0'" })
  partnerUid: number;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("enum", {
    name: "is_medicine",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  isMedicine: "" | "N" | "Y";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "partner_name", nullable: true, length: 30 })
  partnerName: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar", { name: "taxorgnum", nullable: true, length: 20 })
  taxorgnum: string | null;

  @Column("varchar", { name: "partner_code", nullable: true, length: 50 })
  partnerCode: string | null;
}
