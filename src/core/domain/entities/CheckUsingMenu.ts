import { Column, Entity } from "typeorm";

@Entity("check_using_menu", { schema: "makeshop" })
export class CheckUsingMenu {
  @Column("varchar", { primary: true, name: "adminuser", length: 13 })
  adminuser: string;

  @Column("datetime", {
    name: "old_product_registry",
    default: () => "'0000-00-00 00:00:00'",
  })
  oldProductRegistry: Date;
}
