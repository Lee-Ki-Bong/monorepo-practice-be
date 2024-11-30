import { Column, Entity } from "typeorm";

@Entity("mdiary_board_content", { schema: "makeshop" })
export class MdiaryBoardContent {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "mboard_uid",
    unsigned: true,
    default: () => "'0'",
  })
  mboardUid: number;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "mcategory_id", length: 10 })
  mcategoryId: string;

  @Column("varchar", { name: "mboard_theme", nullable: true, length: 200 })
  mboardTheme: string | null;

  @Column("varchar", { name: "tag", nullable: true, length: 100 })
  tag: string | null;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", {
    name: "recommend_product_uid",
    nullable: true,
    length: 35,
  })
  recommendProductUid: string | null;
}
