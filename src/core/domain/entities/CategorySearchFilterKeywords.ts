import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("filter_id", ["adminuser", "filterId", "seq"], {})
@Index("id", ["id"], {})
@Entity("category_search_filter_keywords", { schema: "makeshop" })
export class CategorySearchFilterKeywords {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "filter_id", unsigned: true, default: () => "'0'" })
  filterId: number;

  @Column("int", {
    name: "seq",
    nullable: true,
    comment: "노출 순서",
    unsigned: true,
    default: () => "'0'",
  })
  seq: number | null;

  @Column("varchar", { name: "keyword", length: 60 })
  keyword: string;

  @Column("varchar", {
    name: "option_type",
    nullable: true,
    comment: "null : option 미사용, color : 색상코드, img : 이미지 경로 ",
    length: 10,
  })
  optionType: string | null;

  @Column("varchar", {
    name: "option_display",
    nullable: true,
    comment: "all : 키워드 + 옵션 노출, option : 옵션만 노출",
    length: 10,
    default: () => "'all'",
  })
  optionDisplay: string | null;

  @Column("varchar", { name: "option", nullable: true, length: 100 })
  option: string | null;
}
