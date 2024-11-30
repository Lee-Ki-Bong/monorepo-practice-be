import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_code", ["code"], {})
@Entity("supply", { schema: "makeshop" })
export class Supply {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("varchar", { name: "applicant", nullable: true, length: 12 })
  applicant: string | null;

  @Column("varchar", { name: "app_email", nullable: true, length: 40 })
  appEmail: string | null;

  @Column("varchar", { name: "app_tel", nullable: true, length: 20 })
  appTel: string | null;

  @Column("varchar", { name: "app_image", nullable: true, length: 100 })
  appImage: string | null;

  @Column("varchar", { name: "company_code", nullable: true, length: 40 })
  companyCode: string | null;

  @Column("varchar", { name: "company_name", nullable: true, length: 100 })
  companyName: string | null;

  @Column("varchar", { name: "company_brandname", nullable: true, length: 100 })
  companyBrandname: string | null;

  @Column("varchar", { name: "company_addr", nullable: true, length: 150 })
  companyAddr: string | null;

  @Column("char", { name: "company_group", nullable: true, length: 1 })
  companyGroup: string | null;

  @Column("varchar", { name: "company_fax", nullable: true, length: 20 })
  companyFax: string | null;

  @Column("varchar", {
    name: "display",
    nullable: true,
    length: 6,
    default: () => "'NNNNNN'",
  })
  display: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;
}
