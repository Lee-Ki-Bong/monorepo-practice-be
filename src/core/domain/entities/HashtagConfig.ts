import { Column, Entity } from "typeorm";

@Entity("hashtag_config", { schema: "makeshop" })
export class HashtagConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "htc_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  htcUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "htc_prd_except" })
  htcPrdExcept: string;

  @Column("varchar", { name: "htc_detail_css", length: 150 })
  htcDetailCss: string;

  @Column("varchar", { name: "htc_search_css", length: 150 })
  htcSearchCss: string;

  @Column("varchar", { name: "htc_auto_tag", length: 100 })
  htcAutoTag: string;

  @Column("longtext", { name: "htc_shop_tag" })
  htcShopTag: string;
}
