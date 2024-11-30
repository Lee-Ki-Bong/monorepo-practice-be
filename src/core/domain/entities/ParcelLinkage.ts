import { Column, Entity } from "typeorm";

@Entity("parcel_linkage", { schema: "makeshop" })
export class ParcelLinkage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "ds_code", length: 3 })
  dsCode: string;

  @Column("varchar", { name: "ds_id", nullable: true, length: 20 })
  dsId: string | null;

  @Column("char", {
    name: "ds_use",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  dsUse: string | null;

  @Column("char", {
    name: "approval",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  approval: string | null;

  @Column("varchar", { name: "boxtype", length: 20 })
  boxtype: string;

  @Column("varchar", { name: "default_boxtype", nullable: true, length: 20 })
  defaultBoxtype: string | null;

  @Column("varchar", { name: "company_name", length: 50 })
  companyName: string;

  @Column("varchar", { name: "company_post", length: 6 })
  companyPost: string;

  @Column("varchar", { name: "company_address", length: 200 })
  companyAddress: string;

  @Column("varchar", { name: "company_tel", length: 20 })
  companyTel: string;

  @Column("varchar", { name: "company_hp", length: 20 })
  companyHp: string;

  @Column("int", { name: "deli_price", nullable: true, default: () => "'0'" })
  deliPrice: number | null;

  @Column("char", { name: "pay_type", length: 2 })
  payType: string;
}
