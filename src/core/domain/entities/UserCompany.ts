import { Column, Entity } from "typeorm";

@Entity("user_company", { schema: "makeshop" })
export class UserCompany {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "company_name", length: 200 })
  companyName: string;

  @Column("varchar", { name: "company_owner", length: 50 })
  companyOwner: string;

  @Column("varchar", { name: "company_num", length: 20 })
  companyNum: string;

  @Column("varchar", { name: "company_corp", nullable: true, length: 20 })
  companyCorp: string | null;

  @Column("varchar", { name: "company_biz", length: 255 })
  companyBiz: string;

  @Column("varchar", { name: "company_item", length: 255 })
  companyItem: string;

  @Column("varchar", { name: "company_post", length: 7 })
  companyPost: string;

  @Column("varchar", { name: "company_addr", length: 150 })
  companyAddr: string;
}
