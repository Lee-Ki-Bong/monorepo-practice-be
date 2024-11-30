import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_dg_code", ["dgCode"], {})
@Entity("donation_group", { schema: "makeshop" })
export class DonationGroup {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "dg_code", unsigned: true })
  dgCode: number;

  @Column("varchar", { name: "dg_company_name", nullable: true, length: 30 })
  dgCompanyName: string | null;

  @Column("varchar", { name: "dg_company_biz", nullable: true, length: 50 })
  dgCompanyBiz: string | null;

  @Column("varchar", { name: "dg_company_post", nullable: true, length: 7 })
  dgCompanyPost: string | null;

  @Column("varchar", { name: "dg_company_addr", nullable: true, length: 150 })
  dgCompanyAddr: string | null;
}
