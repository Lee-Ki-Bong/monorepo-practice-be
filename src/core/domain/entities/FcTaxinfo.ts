import { Column, Entity, Index } from "typeorm";

@Index("comname_idx", ["adminuser", "companyName"], {})
@Index("comnum_idx", ["adminuser", "companyNum"], {})
@Index("taxdate_idx", ["adminuser", "taxDate"], {})
@Entity("fc_taxinfo", { schema: "makeshop" })
export class FcTaxinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "company_name", length: 50 })
  companyName: string;

  @Column("varchar", { name: "company_num", length: 20 })
  companyNum: string;

  @Column("int", { name: "tax_supply_price", default: () => "'0'" })
  taxSupplyPrice: number;

  @Column("int", { name: "tax_surtax", default: () => "'0'" })
  taxSurtax: number;

  @Column("int", { name: "tax_tprice", default: () => "'0'" })
  taxTprice: number;

  @Column("varchar", { name: "tax_date", nullable: true, length: 8 })
  taxDate: string | null;

  @Column("varchar", { name: "tax_title", nullable: true, length: 255 })
  taxTitle: string | null;

  @Column("varchar", { primary: true, name: "tax_link", length: 255 })
  taxLink: string;

  @Column("mediumtext", { name: "tax_etc", nullable: true })
  taxEtc: string | null;

  @Column("datetime", {
    name: "tax_regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  taxRegdate: Date;
}
