import { Column, Entity, Index } from "typeorm";

@Index("name", ["name", "date"], {})
@Entity("gonglist", { schema: "makeshop" })
export class Gonglist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", { primary: true, name: "gongcode", default: () => "'0'" })
  gongcode: number;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "makeorder", nullable: true, length: 26 })
  makeorder: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 20 })
  tel: string | null;

  @Column("varchar", { name: "address", nullable: true, length: 150 })
  address: string | null;

  @Column("int", { name: "amount", nullable: true })
  amount: number | null;

  @Column("text", { name: "memo", nullable: true })
  memo: string | null;

  @Column("char", { name: "gubun", nullable: true, length: 1 })
  gubun: string | null;
}
