import { Column, Entity, Index } from "typeorm";

@Index("b2type", ["adminuser", "ordOrdtype"], {})
@Index("paytype", ["adminuser", "ordPaytype"], {})
@Entity("oo_temp_order_seil", { schema: "makeshop" })
export class OoTempOrderSeil {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("varchar", { name: "ord_company", nullable: true, length: 255 })
  ordCompany: string | null;

  @Column("varchar", { name: "ord_company_num", nullable: true, length: 20 })
  ordCompanyNum: string | null;

  @Column("varchar", { name: "ord_company_owner", nullable: true, length: 30 })
  ordCompanyOwner: string | null;

  @Column("varchar", { name: "ord_taxorgnum", nullable: true, length: 8 })
  ordTaxorgnum: string | null;

  @Column("char", {
    name: "ord_print",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ordPrint: string | null;

  @Column("char", {
    name: "ord_paytype",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  ordPaytype: string | null;

  @Column("enum", {
    name: "ord_ordtype",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ordOrdtype: "" | "Y" | "N" | null;

  @Column("char", {
    name: "ord_paystatus",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ordPaystatus: string | null;

  @Column("datetime", { name: "ord_ordtime", nullable: true })
  ordOrdtime: Date | null;
}
