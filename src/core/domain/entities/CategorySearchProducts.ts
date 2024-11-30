import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], {})
@Index("keyword_id", ["adminuser", "keywordId"], {})
@Index("product_uid", ["adminuser", "productUid", "filterId", "keywordId"], {})
@Index("unique_idx", ["adminuser", "filterId", "keywordId", "productUid"], {
  unique: true,
})
@Entity("category_search_products", { schema: "makeshop" })
export class CategorySearchProducts {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "keyword_id", unsigned: true, default: () => "'0'" })
  keywordId: number;

  @Column("int", { name: "filter_id", unsigned: true, default: () => "'0'" })
  filterId: number;

  @Column("int", { name: "product_uid", unsigned: true, default: () => "'0'" })
  productUid: number;
}
