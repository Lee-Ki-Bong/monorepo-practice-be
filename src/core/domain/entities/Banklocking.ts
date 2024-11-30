import { Column, Entity } from "typeorm";

@Entity("banklocking", { schema: "makeshop" })
export class Banklocking {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "hphone", length: 20 })
  hphone: string;

  @Column("char", {
    name: "banking",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  banking: string | null;

  @Column("varchar", { name: "bankingdate", nullable: true, length: 12 })
  bankingdate: string | null;

  @Column("varchar", { name: "bankingkey", nullable: true, length: 8 })
  bankingkey: string | null;
}
