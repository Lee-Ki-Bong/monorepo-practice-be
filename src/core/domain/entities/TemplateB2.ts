import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_b2_id", ["b2Id"], {})
@Entity("template_b2", { schema: "makeshop" })
export class TemplateB2 {
  @Column("char", {
    primary: true,
    name: "board_type",
    length: 2,
    default: () => "'0'",
  })
  boardType: string;

  @PrimaryGeneratedColumn({ type: "int", name: "b2_id" })
  b2Id: number;

  @Column("varchar", { name: "title", nullable: true, length: 50 })
  title: string | null;

  @Column("varchar", { name: "production", nullable: true, length: 30 })
  production: string | null;

  @Column("text", { name: "shopurl", nullable: true })
  shopurl: string | null;
}
