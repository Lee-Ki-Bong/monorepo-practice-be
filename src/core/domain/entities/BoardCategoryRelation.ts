import { Column, Entity, Index } from "typeorm";

@Index("category", ["bcUid"], {})
@Entity("board_category_relation", { schema: "makeshop" })
export class BoardCategoryRelation {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("int", {
    primary: true,
    name: "bc_uid",
    unsigned: true,
    default: () => "'0'",
  })
  bcUid: number;

  @Column("datetime", { name: "date_insert", nullable: true })
  dateInsert: Date | null;
}
