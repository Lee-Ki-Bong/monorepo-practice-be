import { Column, Entity, Index } from "typeorm";

@Index("board_comment", ["code", "num1", "commentNum"], {})
@Entity("board_comment_shopnote", { schema: "makeshop" })
export class BoardCommentShopnote {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("int", { primary: true, name: "comment_num", default: () => "'0'" })
  commentNum: number;

  @Column("int", { primary: true, name: "note_num", default: () => "'0'" })
  noteNum: number;

  @Column("int", {
    primary: true,
    name: "note_comment_num",
    default: () => "'0'",
  })
  noteCommentNum: number;

  @Column("enum", {
    name: "write_channel",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  writeChannel: "" | "WEB" | "MOBILE";
}
