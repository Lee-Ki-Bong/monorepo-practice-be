import { Column, Entity } from "typeorm";

@Entity("admincode", { schema: "makeshop" })
export class Admincode {
  @Column("char", { primary: true, name: "code", length: 2 })
  code: string;

  @Column("varchar", { name: "codename", nullable: true, length: 30 })
  codename: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;
}
