import { Column, Entity } from "typeorm";

@Entity("custom_top_board_list", { schema: "makeshop" })
export class CustomTopBoardList {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
