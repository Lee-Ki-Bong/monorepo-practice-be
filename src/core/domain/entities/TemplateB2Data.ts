import { Column, Entity } from "typeorm";

@Entity("template_b2_data", { schema: "makeshop" })
export class TemplateB2Data {
  @Column("char", { name: "board_type", length: 2, default: () => "'0'" })
  boardType: string;

  @Column("int", { name: "b2_id", default: () => "'0'" })
  b2Id: number;

  @Column("enum", {
    name: "page_type",
    enum: ["", "list", "write", "view", "passwd", "comment", "review"],
    default: () => "'list'",
  })
  pageType: "" | "list" | "write" | "view" | "passwd" | "comment" | "review";

  @Column("longtext", { name: "body" })
  body: string;
}
