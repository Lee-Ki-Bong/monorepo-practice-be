import { Column, Entity } from "typeorm";

@Entity("deli_com", { schema: "makeshop" })
export class DeliCom {
  @Column("char", { primary: true, name: "code", length: 3 })
  code: string;

  @Column("varchar", { name: "company", length: 30 })
  company: string;

  @Column("varchar", { name: "url", length: 200 })
  url: string;

  @Column("varchar", { name: "delinum", nullable: true, length: 10 })
  delinum: string | null;
}
