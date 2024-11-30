import { Column, Entity } from "typeorm";

@Entity("board_group_count", { schema: "makeshop" })
export class BoardGroupCount {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "gid", length: 30 })
  gid: string;

  @Column("int", { name: "cnt", unsigned: true, default: () => "'0'" })
  cnt: number;

  @Column("int", { name: "photocnt", unsigned: true, default: () => "'0'" })
  photocnt: number;

  @Column("int", { name: "score_total", unsigned: true, default: () => "'0'" })
  scoreTotal: number;

  @Column("int", {
    name: "score_icon_total",
    unsigned: true,
    default: () => "'0'",
  })
  scoreIconTotal: number;
}
