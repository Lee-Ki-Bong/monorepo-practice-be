import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_news_id", ["newsId"], {})
@Entity("mobilenews", { schema: "makeshop" })
export class Mobilenews {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "news_id", unsigned: true })
  newsId: number;

  @Column("char", { name: "title", length: 200 })
  title: string;

  @Column("char", { name: "title_color", nullable: true, length: 6 })
  titleColor: string | null;

  @Column("int", { name: "brand_id", default: () => "'0'" })
  brandId: number;

  @Column("int", { name: "category_id", unsigned: true, default: () => "'0'" })
  categoryId: number;

  @Column("datetime", {
    name: "created",
    default: () => "'0000-00-00 00:00:00'",
  })
  created: Date;

  @Column("datetime", {
    name: "updated",
    default: () => "'0000-00-00 00:00:00'",
  })
  updated: Date;
}
