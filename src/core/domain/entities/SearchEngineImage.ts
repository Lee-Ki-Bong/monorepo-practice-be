import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_id", ["id"], {})
@Index("keyword", ["adminuser", "keyword"], {})
@Entity("search_engine_image", { schema: "makeshop" })
export class SearchEngineImage {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("varchar", { name: "pc_image", nullable: true, length: 100 })
  pcImage: string | null;

  @Column("varchar", { name: "mobile_image", nullable: true, length: 100 })
  mobileImage: string | null;
}
