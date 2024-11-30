import { Column, Entity } from "typeorm";

@Entity("divide_taxbill_apply_2022", { schema: "makeshop" })
export class DivideTaxbillApply_2022 {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("int", { primary: true, name: "tba_id", default: () => "'0'" })
  tbaId: number;

  @Column("varchar", { name: "tba_user_id", nullable: true, length: 20 })
  tbaUserId: string | null;

  @Column("varchar", { name: "tba_name", length: 255 })
  tbaName: string;

  @Column("varchar", { name: "tba_phone", length: 255 })
  tbaPhone: string;

  @Column("mediumtext", { name: "tba_email", nullable: true })
  tbaEmail: string | null;

  @Column("mediumtext", { name: "tba_company_name", nullable: true })
  tbaCompanyName: string | null;

  @Column("varchar", { name: "tba_company_owner", length: 255 })
  tbaCompanyOwner: string;

  @Column("varchar", { name: "tba_company_num", length: 255 })
  tbaCompanyNum: string;

  @Column("mediumtext", { name: "tba_company_biz", nullable: true })
  tbaCompanyBiz: string | null;

  @Column("mediumtext", { name: "tba_company_item", nullable: true })
  tbaCompanyItem: string | null;

  @Column("varchar", { name: "tba_company_post", length: 255 })
  tbaCompanyPost: string;

  @Column("mediumtext", { name: "tba_company_addr", nullable: true })
  tbaCompanyAddr: string | null;

  @Column("mediumtext", { name: "tba_company_addr2", nullable: true })
  tbaCompanyAddr2: string | null;
}