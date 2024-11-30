import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_category_id", ["categoryId"], {})
@Entity("mobilecategory", { schema: "makeshop" })
export class Mobilecategory {
  @Column("char", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "category_id", unsigned: true })
  categoryId: number;

  @Column("mediumint", { name: "sequence", nullable: true, unsigned: true })
  sequence: number | null;

  @Column("char", { name: "title", length: 200 })
  title: string;

  @Column("char", { name: "title_color", nullable: true, length: 6 })
  titleColor: string | null;

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
