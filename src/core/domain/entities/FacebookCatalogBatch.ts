import { Column, Entity, Index } from "typeorm";

@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("facebook_catalog_batch", { schema: "makeshop" })
export class FacebookCatalogBatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("enum", {
    name: "method",
    enum: ["", "CREATE", "UPDATE", "DELETE"],
    default: () => "'CREATE'",
  })
  method: "" | "CREATE" | "UPDATE" | "DELETE";

  @Column("mediumtext", { name: "data", nullable: true })
  data: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
