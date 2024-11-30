import { Column, Entity } from "typeorm";

@Entity("design", { schema: "makeshop" })
export class Design {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "language",
    enum: ["", "kor", "eng"],
    default: () => "'kor'",
  })
  language: "" | "kor" | "eng";

  @Column("longtext", { name: "top_body", nullable: true })
  topBody: string | null;

  @Column("longtext", { name: "left_body", nullable: true })
  leftBody: string | null;

  @Column("char", {
    name: "title_ok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  titleOk: string | null;

  @Column("varchar", {
    name: "main_title_color",
    nullable: true,
    length: 14,
    default: () => "'F4F4E4'",
  })
  mainTitleColor: string | null;

  @Column("int", { name: "top_height", nullable: true, default: () => "'55'" })
  topHeight: number | null;
}
