import { Column, Entity, Index } from "typeorm";

@Index("idx_pdr_uid", ["adminuser", "pdrUid"], {})
@Index("idx_product_uid", ["adminuser", "productUid"], {})
@Entity("product_display_reservation_match", { schema: "makeshop" })
export class ProductDisplayReservationMatch {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "pdr_uid", default: () => "'0'" })
  pdrUid: number;

  @Column("int", { primary: true, name: "product_uid", default: () => "'0'" })
  productUid: number;
}
