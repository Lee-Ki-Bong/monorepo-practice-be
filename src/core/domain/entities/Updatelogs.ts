import { Column, Entity, Index } from "typeorm";

@Index("date", ["date"], {})
@Entity("updatelogs", { schema: "makeshop" })
export class Updatelogs {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "logkey", length: 26 })
  logkey: string;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;
}
