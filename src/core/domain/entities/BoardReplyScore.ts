import { Column, Entity } from "typeorm";

@Entity("board_reply_score", { schema: "makeshop" })
export class BoardReplyScore {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("datetime", {
    name: "insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  insertDate: Date;

  @Column("varchar", { name: "reply_text", nullable: true, length: 200 })
  replyText: string | null;

  @Column("tinyint", { name: "reply_score", default: () => "'0'" })
  replyScore: number;
}
