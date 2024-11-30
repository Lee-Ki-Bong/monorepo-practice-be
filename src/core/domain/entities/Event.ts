import { Column, Entity } from "typeorm";

@Entity("event", { schema: "makeshop" })
export class Event {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("char", { name: "prize", nullable: true, length: 1 })
  prize: string | null;

  @Column("varchar", { name: "content", nullable: true, length: 50 })
  content: string | null;
}
