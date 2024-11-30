import { Column, Entity } from "typeorm";

@Entity("ars_bulk_list", { schema: "makeshop" })
export class ArsBulkList {
  @Column("varchar", { primary: true, name: "bulk_phone", length: 20 })
  bulkPhone: string;

  @Column("varchar", { name: "bulk_adminuser", length: 12 })
  bulkAdminuser: string;

  @Column("enum", {
    name: "bulk_status",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  bulkStatus: "" | "N" | "Y";
}
