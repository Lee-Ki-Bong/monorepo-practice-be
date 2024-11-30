import { Column, Entity, Index } from "typeorm";

@Index("rd_date_issue", ["rdDateIssue"], {})
@Entity("remove_shop_data", { schema: "makeshop" })
export class RemoveShopData {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("date", { name: "rd_date_issue", default: () => "'0000-00-00'" })
  rdDateIssue: string;

  @Column("enum", {
    name: "rd_state",
    enum: ["", "FAIL", "WAIT", "LIMIT", "DONE"],
    default: () => "'WAIT'",
  })
  rdState: "" | "FAIL" | "WAIT" | "LIMIT" | "DONE";

  @Column("datetime", { name: "rd_date_shop", nullable: true })
  rdDateShop: Date | null;

  @Column("datetime", { name: "rd_date_done", nullable: true })
  rdDateDone: Date | null;
}
