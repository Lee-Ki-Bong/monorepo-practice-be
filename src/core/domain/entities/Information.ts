import { Column, Entity } from "typeorm";

@Entity("information", { schema: "makeshop" })
export class Information {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "subject", nullable: true, length: 250 })
  subject: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 50 })
  image: string | null;

  @Column("varchar", { name: "align", nullable: true, length: 10 })
  align: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;
}
