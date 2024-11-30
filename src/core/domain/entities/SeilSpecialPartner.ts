import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("sp_date", ["adminuser", "userId", "regDate"], {})
@Index("sp_manager", ["adminuser", "userId", "managerName"], {})
@Index("sp_owner", ["adminuser", "userId", "ownerName"], {})
@Index("sp_partner", ["adminuser", "userId", "partnerName"], {})
@Index("sp_phone", ["adminuser", "userId", "phone"], {})
@Entity("seil_special_partner", { schema: "makeshop" })
export class SeilSpecialPartner {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "partner_name", nullable: true, length: 30 })
  partnerName: string | null;

  @Column("varchar", { name: "owner_name", nullable: true, length: 30 })
  ownerName: string | null;

  @Column("varchar", { name: "manager_name", nullable: true, length: 30 })
  managerName: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("varchar", { name: "phone2", nullable: true, length: 20 })
  phone2: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "company_biz", nullable: true, length: 50 })
  companyBiz: string | null;

  @Column("varchar", { name: "company_item", nullable: true, length: 50 })
  companyItem: string | null;

  @Column("varchar", { name: "taxorgnum", nullable: true, length: 20 })
  taxorgnum: string | null;

  @Column("varchar", { name: "company_post", nullable: true, length: 6 })
  companyPost: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar", { name: "payday", nullable: true, length: 10 })
  payday: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", {
    name: "mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modDate: Date;

  @Column("enum", {
    name: "sp_use",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  spUse: "" | "Y" | "N";

  @Column("varchar", { name: "partner_code", nullable: true, length: 50 })
  partnerCode: string | null;
}
