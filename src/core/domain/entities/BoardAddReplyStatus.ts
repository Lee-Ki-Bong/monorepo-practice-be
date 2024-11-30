import { Column, Entity } from "typeorm";

@Entity("board_add_reply_status", { schema: "makeshop" })
export class BoardAddReplyStatus {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { name: "reply_status", length: 20 })
  replyStatus: string;
}
