import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tba_id", ["tbaId"], {})
@Entity("taxbill_apply", { schema: "makeshop" })
export class TaxbillApply {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tba_id", unsigned: true })
  tbaId: number;

  @Column("varchar", { name: "tba_user_id", nullable: true, length: 20 })
  tbaUserId: string | null;

  @Column("varchar", { name: "tba_name", length: 30 })
  tbaName: string;

  @Column("varchar", { name: "tba_phone", length: 20 })
  tbaPhone: string;

  @Column("varchar", { name: "tba_email", length: 35 })
  tbaEmail: string;

  @Column("varchar", { name: "tba_company_name", length: 200 })
  tbaCompanyName: string;

  @Column("varchar", { name: "tba_company_owner", length: 50 })
  tbaCompanyOwner: string;

  @Column("varchar", { name: "tba_company_num", length: 20 })
  tbaCompanyNum: string;

  @Column("varchar", { name: "tba_company_biz", length: 255 })
  tbaCompanyBiz: string;

  @Column("varchar", { name: "tba_company_item", length: 255 })
  tbaCompanyItem: string;

  @Column("varchar", { name: "tba_company_post", length: 7 })
  tbaCompanyPost: string;

  @Column("varchar", { name: "tba_company_addr", length: 150 })
  tbaCompanyAddr: string;

  @Column("varchar", { name: "tba_company_addr2", length: 100 })
  tbaCompanyAddr2: string;
}
