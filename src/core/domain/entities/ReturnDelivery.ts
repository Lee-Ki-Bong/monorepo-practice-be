import { Column, Entity } from "typeorm";

@Entity("return_delivery", { schema: "makeshop" })
export class ReturnDelivery {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "rd_use",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  rdUse: "" | "N" | "Y";

  @Column("tinyint", { primary: true, name: "rd_code", default: () => "'0'" })
  rdCode: number;

  @Column("varchar", { name: "rd_cust_id", length: 50 })
  rdCustId: string;

  @Column("enum", {
    name: "rd_select_def",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  rdSelectDef: "" | "Y" | "N";

  @Column("varchar", {
    name: "rd_set_time",
    length: 10,
    default: () => "'ADMIN'",
  })
  rdSetTime: string;

  @Column("enum", {
    name: "rd_company_name",
    enum: ["", "company_name", "shop_name"],
    default: () => "'company_name'",
  })
  rdCompanyName: "" | "company_name" | "shop_name";

  @Column("mediumint", {
    name: "rd_weight",
    unsigned: true,
    default: () => "'2000'",
  })
  rdWeight: number;
}
