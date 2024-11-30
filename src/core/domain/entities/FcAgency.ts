import { Column, Entity, Index } from "typeorm";

@Index("add_idx", ["addType"], {})
@Index("auth_idx", ["authdate"], {})
@Index("end_idx", ["enddate"], {})
@Index("join_idx", ["joindate"], {})
@Entity("fc_agency", { schema: "makeshop" })
export class FcAgency {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "agency", length: 12 })
  agency: string;

  @Column("varchar", { name: "id", length: 12 })
  id: string;

  @Column("enum", {
    name: "add_type",
    nullable: true,
    enum: ["", "D", "A"],
    default: () => "'A'",
  })
  addType: "" | "D" | "A" | null;

  @Column("varchar", { name: "joindate", nullable: true, length: 8 })
  joindate: string | null;

  @Column("varchar", { name: "authdate", nullable: true, length: 8 })
  authdate: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 8 })
  enddate: string | null;

  @Column("enum", {
    name: "req_status",
    nullable: true,
    enum: ["", "R", "A1", "A2"],
    default: () => "'R'",
  })
  reqStatus: "" | "R" | "A1" | "A2" | null;

  @Column("float", { name: "cur_charge", precision: 12, default: () => "'0'" })
  curCharge: number;

  @Column("mediumtext", { name: "etctype", nullable: true })
  etctype: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("varchar", { name: "shopurl", nullable: true, length: 50 })
  shopurl: string | null;

  @Column("varchar", { name: "applicant", nullable: true, length: 12 })
  applicant: string | null;

  @Column("varchar", { name: "app_email", nullable: true, length: 40 })
  appEmail: string | null;

  @Column("varchar", { name: "app_tel", nullable: true, length: 20 })
  appTel: string | null;

  @Column("varchar", { name: "app_dept", nullable: true, length: 25 })
  appDept: string | null;

  @Column("varchar", { name: "app_post", length: 7 })
  appPost: string;

  @Column("varchar", { name: "app_addr", length: 255 })
  appAddr: string;

  @Column("varchar", { name: "company_name", nullable: true, length: 50 })
  companyName: string | null;

  @Column("varchar", { name: "company_num", nullable: true, length: 20 })
  companyNum: string | null;

  @Column("varchar", { name: "company_owner", nullable: true, length: 12 })
  companyOwner: string | null;

  @Column("varchar", { name: "company_post", nullable: true, length: 6 })
  companyPost: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("varchar", { name: "company_biz", nullable: true, length: 50 })
  companyBiz: string | null;

  @Column("varchar", { name: "company_item", nullable: true, length: 50 })
  companyItem: string | null;

  @Column("varchar", { name: "report_num", nullable: true, length: 40 })
  reportNum: string | null;

  @Column("varchar", { name: "reseller", nullable: true, length: 12 })
  reseller: string | null;

  @Column("int", { name: "curnum", default: () => "'0'" })
  curnum: number;

  @Column("mediumtext", { name: "display_menu", nullable: true })
  displayMenu: string | null;

  @Column("varchar", { name: "calc_memo", length: 255 })
  calcMemo: string;

  @Column("enum", {
    name: "farmtype",
    enum: ["", "A", "B", "C"],
    default: () => "'A'",
  })
  farmtype: "" | "A" | "B" | "C";

  @Column("enum", {
    name: "sellertype",
    enum: ["", "A", "B", "C", "D"],
    default: () => "'A'",
  })
  sellertype: "" | "A" | "B" | "C" | "D";

  @Column("varchar", { name: "com_tel", nullable: true, length: 20 })
  comTel: string | null;

  @Column("varchar", { name: "com_fax", nullable: true, length: 20 })
  comFax: string | null;

  @Column("varchar", { name: "delivery_post", nullable: true, length: 7 })
  deliveryPost: string | null;

  @Column("varchar", { name: "delivery_addr", nullable: true, length: 255 })
  deliveryAddr: string | null;

  @Column("varchar", { name: "return_post", nullable: true, length: 7 })
  returnPost: string | null;

  @Column("varchar", { name: "return_addr", nullable: true, length: 255 })
  returnAddr: string | null;

  @Column("mediumtext", { name: "jiro", nullable: true })
  jiro: string | null;

  @Column("mediumtext", { name: "cropterm", nullable: true })
  cropterm: string | null;

  @Column("int", { name: "career", nullable: true, default: () => "'0'" })
  career: number | null;

  @Column("varchar", {
    name: "domainurl",
    nullable: true,
    length: 255,
    default: () => "'N'",
  })
  domainurl: string | null;

  @Column("mediumtext", { name: "authinfo", nullable: true })
  authinfo: string | null;

  @Column("varchar", { name: "pf_img", nullable: true, length: 4 })
  pfImg: string | null;

  @Column("varchar", { name: "pf_title", nullable: true, length: 255 })
  pfTitle: string | null;

  @Column("varchar", { name: "pf_info", nullable: true, length: 255 })
  pfInfo: string | null;
}
