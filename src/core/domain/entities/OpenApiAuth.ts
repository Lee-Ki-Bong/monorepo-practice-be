import { Column, Entity } from "typeorm";

@Entity("open_api_auth", { schema: "makeshop" })
export class OpenApiAuth {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "company_uid",
    unsigned: true,
    default: () => "'0'",
  })
  companyUid: number;

  @Column("varchar", { name: "company_name", length: 50 })
  companyName: string;

  @Column("varchar", { name: "shop_key", length: 50 })
  shopKey: string;

  @Column("mediumtext", { name: "webhook_event", nullable: true })
  webhookEvent: string | null;

  @Column("mediumtext", { name: "wehhook_event", nullable: true })
  wehhookEvent: string | null;

  @Column("mediumtext", { name: "webhook_auth", nullable: true })
  webhookAuth: string | null;

  @Column("varchar", { name: "webhook_end_point", nullable: true, length: 100 })
  webhookEndPoint: string | null;

  @Column("char", {
    name: "webhook_state",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  webhookState: string | null;

  @Column("varchar", { name: "auth_inquiry", nullable: true, length: 255 })
  authInquiry: string | null;

  @Column("mediumtext", { name: "auth_inquiry_detail", nullable: true })
  authInquiryDetail: string | null;

  @Column("varchar", { name: "auth_modify", nullable: true, length: 255 })
  authModify: string | null;

  @Column("mediumtext", { name: "auth_modify_detail", nullable: true })
  authModifyDetail: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
