import { Column, Entity } from "typeorm";

@Entity("template", { schema: "makeshop" })
export class Template {
  @Column("varchar", { primary: true, name: "design_type", length: 15 })
  designType: string;

  @Column("mediumtext", { name: "body", nullable: true })
  body: string | null;
}
