import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("category", ["adminuser", "category"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("faq_list", { schema: "makeshop" })
export class FaqList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { name: "category", unsigned: true, default: () => "'0'" })
  category: number;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("longtext", { name: "question" })
  question: string;

  @Column("longtext", { name: "answer" })
  answer: string;

  @Column("int", { name: "click", nullable: true, default: () => "'0'" })
  click: number | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "mod_date", nullable: true })
  modDate: Date | null;

  @Column("enum", {
    name: "view_flag",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  viewFlag: "" | "Y" | "N";
}
