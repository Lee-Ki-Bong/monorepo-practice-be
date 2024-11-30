import { Column, Entity } from "typeorm";

@Entity("product_common_info_condition", { schema: "makeshop" })
export class ProductCommonInfoCondition {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "pci_uid", default: () => "'0'" })
  pciUid: number;

  @Column("varchar", {
    primary: true,
    name: "pcic_type",
    length: 5,
    default: () => "'CATE'",
  })
  pcicType: string;

  @Column("varchar", { primary: true, name: "pcic_code", length: 20 })
  pcicCode: string;
}
