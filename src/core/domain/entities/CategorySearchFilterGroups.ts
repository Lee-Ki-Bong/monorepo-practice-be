import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("category", ["adminuser", "cate1", "cate2", "cate3"], {})
@Index("filter_id", ["adminuser", "filterId"], {})
@Index("id", ["id"], {})
@Entity("category_search_filter_groups", { schema: "makeshop" })
export class CategorySearchFilterGroups {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "cate1", nullable: true, length: 9 })
  cate1: string | null;

  @Column("varchar", { name: "cate2", nullable: true, length: 9 })
  cate2: string | null;

  @Column("varchar", { name: "cate3", nullable: true, length: 9 })
  cate3: string | null;

  @Column("int", { name: "filter_id", unsigned: true, default: () => "'0'" })
  filterId: number;
}
