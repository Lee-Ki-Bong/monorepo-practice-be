import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("date", ["date"], {})
@Entity("authimg", { schema: "makeshop" })
export class Authimg {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "text", length: 20 })
  text: string;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
