import { Column, Entity } from "typeorm";

@Entity("dongbu", { schema: "makeshop" })
export class Dongbu {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "print_name", nullable: true, length: 20 })
  printName: string | null;

  @Column("varchar", { name: "print_tel", nullable: true, length: 15 })
  printTel: string | null;

  @Column("varchar", { name: "print_hp", nullable: true, length: 15 })
  printHp: string | null;

  @Column("varchar", { name: "print_post", nullable: true, length: 7 })
  printPost: string | null;

  @Column("varchar", { name: "print_addr", nullable: true, length: 150 })
  printAddr: string | null;

  @Column("enum", {
    name: "oktype",
    nullable: true,
    enum: ["", "Y", "N", "C"],
    default: () => "'N'",
  })
  oktype: "" | "Y" | "N" | "C" | null;

  @Column("varchar", { name: "okmess", nullable: true, length: 255 })
  okmess: string | null;

  @Column("int", { name: "count", nullable: true, default: () => "'0'" })
  count: number | null;

  @Column("varchar", { name: "countdate", nullable: true, length: 14 })
  countdate: string | null;
}
