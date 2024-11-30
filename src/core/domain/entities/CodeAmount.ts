import { Column, Entity, Index } from "typeorm";

@Index("NAME", ["code", "shopname"], {})
@Entity("code_amount", { schema: "makeshop" })
export class CodeAmount {
  @Column("varchar", { name: "shopurl", length: 50 })
  shopurl: string;

  @Column("char", { name: "code", length: 2 })
  code: string;

  @Column("varchar", { name: "shopintro", nullable: true, length: 250 })
  shopintro: string | null;

  @Column("varchar", { name: "shopname", length: 50 })
  shopname: string;

  @Column("char", {
    name: "premium",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  premium: string | null;

  @Column("varchar", { name: "adminuser", nullable: true, length: 12 })
  adminuser: string | null;
}
