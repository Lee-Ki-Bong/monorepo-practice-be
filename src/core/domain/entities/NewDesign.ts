import { Column, Entity } from "typeorm";

@Entity("new_design", { schema: "makeshop" })
export class NewDesign {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 20 })
  type: string;

  @Column("varchar", {
    primary: true,
    name: "code",
    length: 6,
    default: () => "'0'",
  })
  code: string;

  @Column("enum", {
    primary: true,
    name: "language",
    enum: ["", "kor", "eng"],
    default: () => "'kor'",
  })
  language: "" | "kor" | "eng";

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 255 })
  filename: string | null;

  @Column("char", { name: "leftmenu", nullable: true, length: 1 })
  leftmenu: string | null;

  @Column("longtext", { name: "body", nullable: true })
  body: string | null;

  @Column("longtext", { name: "except_category", nullable: true })
  exceptCategory: string | null;
}
