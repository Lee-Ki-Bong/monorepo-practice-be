import { Column, Entity } from "typeorm";

@Entity("power_review_boardsize", { schema: "makeshop" })
export class PowerReviewBoardsize {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "servername", length: 10 })
  servername: string;

  @Column("int", { name: "review_size", default: () => "'0'" })
  reviewSize: number;

  @Column("int", { name: "review_total", default: () => "'0'" })
  reviewTotal: number;

  @Column("int", { name: "board_size", default: () => "'0'" })
  boardSize: number;

  @Column("int", { name: "board_total", default: () => "'0'" })
  boardTotal: number;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;
}
