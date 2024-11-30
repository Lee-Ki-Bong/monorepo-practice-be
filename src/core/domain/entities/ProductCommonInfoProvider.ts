import { Column, Entity } from "typeorm";

@Entity("product_common_info_provider", { schema: "makeshop" })
export class ProductCommonInfoProvider {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "pci_uid", default: () => "'0'" })
  pciUid: number;

  @Column("int", {
    primary: true,
    name: "pcip_code",
    unsigned: true,
    default: () => "'0'",
  })
  pcipCode: number;
}
