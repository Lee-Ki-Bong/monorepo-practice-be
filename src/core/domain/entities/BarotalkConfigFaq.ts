import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_code", ["code"], {})
@Entity("barotalk_config_faq", { schema: "makeshop" })
export class BarotalkConfigFaq {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("char", { name: "depth", length: 1, default: () => "'1'" })
  depth: string;

  @Column("int", { name: "parent_code", unsigned: true, default: () => "'0'" })
  parentCode: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("varchar", { name: "ask_content", length: 200 })
  askContent: string;

  @Column("varchar", { name: "reply_content", length: 200 })
  replyContent: string;

  @Column("enum", {
    name: "ask_type",
    enum: [
      "",
      "member",
      "order",
      "pay",
      "delivery",
      "trade",
      "refund",
      "prd",
      "etc",
    ],
    default: () => "'member'",
  })
  askType:
    | ""
    | "member"
    | "order"
    | "pay"
    | "delivery"
    | "trade"
    | "refund"
    | "prd"
    | "etc";

  @Column("enum", {
    name: "reply_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  replyUse: "" | "Y" | "N";
}
