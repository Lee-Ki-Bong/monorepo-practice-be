import { Column, Entity, Index } from "typeorm";

@Index("b2type", ["adminuser", "userB2type"], {})
@Index("comname", ["adminuser", "userComname"], {})
@Index("paytype", ["adminuser", "userPaytype"], {})
@Entity("user_seil", { schema: "makeshop" })
export class UserSeil {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "user_comname", nullable: true, length: 255 })
  userComname: string | null;

  @Column("char", { name: "user_job", length: 2, default: () => "'6'" })
  userJob: string;

  @Column("varchar", { name: "user_license", nullable: true, length: 20 })
  userLicense: string | null;

  @Column("char", {
    name: "user_path",
    nullable: true,
    length: 1,
    default: () => "'6'",
  })
  userPath: string | null;

  @Column("char", {
    name: "user_paytype",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  userPaytype: string | null;

  @Column("char", {
    name: "user_b2type",
    nullable: true,
    length: 1,
    default: () => "'C'",
  })
  userB2type: string | null;

  @Column("varchar", { name: "user_oldgrd", nullable: true, length: 255 })
  userOldgrd: string | null;

  @Column("varchar", { name: "user_taxorgnum", nullable: true, length: 40 })
  userTaxorgnum: string | null;

  @Column("varchar", { name: "user_taxemail", nullable: true, length: 35 })
  userTaxemail: string | null;

  @Column("varchar", { name: "user_taxhp", nullable: true, length: 20 })
  userTaxhp: string | null;

  @Column("mediumtext", { name: "user_memo", nullable: true })
  userMemo: string | null;

  @Column("varchar", { name: "user_name", length: 20 })
  userName: string;

  @Column("varchar", { name: "partner_id", length: 20 })
  partnerId: string;

  @Column("varchar", { name: "partner_code", nullable: true, length: 40 })
  partnerCode: string | null;

  @Column("date", { name: "partner_date", default: () => "'0000-00-00'" })
  partnerDate: string;

  @Column("int", { name: "order_price", default: () => "'0'" })
  orderPrice: number;

  @Column("int", { name: "avg_price", default: () => "'0'" })
  avgPrice: number;

  @Column("varchar", { name: "bankname", length: 40 })
  bankname: string;

  @Column("varchar", { name: "etc", length: 100 })
  etc: string;

  @Column("varchar", { name: "user_delicom", length: 40 })
  userDelicom: string;

  @Column("varchar", { name: "seil_company_owner", length: 20 })
  seilCompanyOwner: string;

  @Column("varchar", { name: "seil_company_staff", length: 20 })
  seilCompanyStaff: string;

  @Column("enum", {
    name: "taxbill_month_batch",
    enum: ["", "N", "Y", "READY_N", "READY_Y"],
    default: () => "'N'",
  })
  taxbillMonthBatch: "" | "N" | "Y" | "READY_N" | "READY_Y";

  @Column("date", {
    name: "taxbill_month_batch_date",
    default: () => "'0000-00-00'",
  })
  taxbillMonthBatchDate: string;
}
