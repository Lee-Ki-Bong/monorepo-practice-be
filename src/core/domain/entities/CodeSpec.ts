import { Column, Entity } from "typeorm";

@Entity("code_spec", { schema: "makeshop" })
export class CodeSpec {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("char", {
    primary: true,
    name: "cate1",
    length: 3,
    default: () => "'000'",
  })
  cate1: string;

  @Column("mediumtext", { name: "spec_info", nullable: true })
  specInfo: string | null;
}
