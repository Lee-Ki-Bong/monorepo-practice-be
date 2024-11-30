import { Column, Entity } from "typeorm";

@Entity("delivery", { schema: "makeshop" })
export class Delivery {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "delivery_company", default: () => "'0'" })
  deliveryCompany: number;

  @Column("varchar", { name: "company", length: 50 })
  company: string;

  @Column("varchar", { name: "tel", length: 20 })
  tel: string;

  @Column("varchar", { name: "htel", nullable: true, length: 20 })
  htel: string | null;

  @Column("varchar", { name: "post", length: 6 })
  post: string;

  @Column("varchar", { name: "address", length: 200 })
  address: string;

  @Column("int", { name: "topsize", default: () => "'0'" })
  topsize: number;

  @Column("int", { name: "leftsize", default: () => "'0'" })
  leftsize: number;

  @Column("varchar", { name: "companycode", length: 20 })
  companycode: string;

  @Column("int", { name: "checkflag", nullable: true, default: () => "'0'" })
  checkflag: number | null;

  @Column("char", {
    name: "printyes",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  printyes: string | null;

  @Column("varchar", { name: "etc", length: 40 })
  etc: string;

  @Column("int", {
    primary: true,
    name: "provider",
    unsigned: true,
    default: () => "'0'",
  })
  provider: number;
}
