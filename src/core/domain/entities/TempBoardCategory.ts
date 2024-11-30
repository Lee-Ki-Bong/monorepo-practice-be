import { Column, Entity } from "typeorm";

@Entity("temp_board_category", { schema: "makeshop" })
export class TempBoardCategory {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("int", { primary: true, name: "uid", default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "bc_uids", length: 100 })
  bcUids: string;
}
