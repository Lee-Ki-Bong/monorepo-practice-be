import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("template2", { schema: "makeshop" })
export class Template2 {
  @PrimaryGeneratedColumn({ type: "int", name: "design_id" })
  designId: number;

  @Column("int", { name: "top_height", nullable: true, default: () => "'55'" })
  topHeight: number | null;

  @Column("int", { name: "win_sizex", nullable: true })
  winSizex: number | null;

  @Column("int", { name: "win_sizey", nullable: true })
  winSizey: number | null;

  @Column("varchar", { name: "title", nullable: true, length: 50 })
  title: string | null;

  @Column("varchar", { name: "production", nullable: true, length: 30 })
  production: string | null;

  @Column("text", { name: "shopurl", nullable: true })
  shopurl: string | null;
}
