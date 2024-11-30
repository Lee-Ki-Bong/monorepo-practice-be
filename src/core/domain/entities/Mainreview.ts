import { Column, Entity } from "typeorm";

@Entity("mainreview", { schema: "makeshop" })
export class Mainreview {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "total_cnt", default: () => "'0'" })
  totalCnt: number;

  @Column("int", { name: "cnt", nullable: true })
  cnt: number | null;

  @Column("int", { name: "photocnt", nullable: true })
  photocnt: number | null;

  @Column("int", { name: "score_total", default: () => "'0'" })
  scoreTotal: number;

  @Column("int", { name: "score_icon_total", default: () => "'0'" })
  scoreIconTotal: number;

  @Column("int", { name: "navercnt", nullable: true })
  navercnt: number | null;

  @Column("int", { name: "member_cnt", default: () => "'0'" })
  memberCnt: number;
}
