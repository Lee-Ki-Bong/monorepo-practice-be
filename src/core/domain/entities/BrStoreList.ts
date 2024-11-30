import { Column, Entity, Index } from "typeorm";

@Index("bs_addr_simple", ["bsAddrSimple"], {})
@Entity("br_store_list", { schema: "makeshop" })
export class BrStoreList {
  @Column("varchar", { primary: true, name: "bs_shopcode", length: 100 })
  bsShopcode: string;

  @Column("varchar", { name: "bs_name", length: 255 })
  bsName: string;

  @Column("varchar", { name: "bs_master", length: 255 })
  bsMaster: string;

  @Column("varchar", { name: "bs_brand", length: 255 })
  bsBrand: string;

  @Column("varchar", { name: "bs_phone", length: 20 })
  bsPhone: string;

  @Column("varchar", { name: "bs_post", length: 10 })
  bsPost: string;

  @Column("varchar", { name: "bs_addr1", length: 255 })
  bsAddr1: string;

  @Column("varchar", { name: "bs_addr2", length: 255 })
  bsAddr2: string;

  @Column("varchar", { name: "bs_addr_simple", length: 20 })
  bsAddrSimple: string;

  @Column("date", { name: "bs_date_sync", default: () => "'0000-00-00'" })
  bsDateSync: string;
}
