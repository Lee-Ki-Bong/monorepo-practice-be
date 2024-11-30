import { Column, Entity } from "typeorm";

@Entity("common_excel_fields", { schema: "makeshop" })
export class CommonExcelFields {
  @Column("varchar", { primary: true, name: "cef_type", length: 50 })
  cefType: string;

  @Column("text", { name: "cef_fields" })
  cefFields: string;

  @Column("text", { name: "default_fields" })
  defaultFields: string;

  @Column("text", { name: "security_fields" })
  securityFields: string;
}
