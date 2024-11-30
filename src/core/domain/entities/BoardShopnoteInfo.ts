import { Column, Entity, Index } from "typeorm";

@Index("code_num", ["code", "num1"], {})
@Entity("board_shopnote_info", { schema: "makeshop" })
export class BoardShopnoteInfo {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("int", { primary: true, name: "note_num", default: () => "'0'" })
  noteNum: number;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("int", { name: "web_reply", default: () => "'0'" })
  webReply: number;

  @Column("int", { name: "mobile_reply", default: () => "'0'" })
  mobileReply: number;

  @Column("enum", {
    name: "write_channel",
    enum: ["", "WEB", "MOBILE"],
    default: () => "'WEB'",
  })
  writeChannel: "" | "WEB" | "MOBILE";
}
