import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lunch_vote", { schema: "makeshop" })
export class LunchVote {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("varchar", { name: "menu", length: 20 })
  menu: string;

  @Column("int", { name: "vote", nullable: true, default: () => "'0'" })
  vote: number | null;

  @Column("enum", {
    name: "result",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  result: "" | "Y" | "N" | null;

  @Column("varchar", { name: "ip", nullable: true, length: 20 })
  ip: string | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;
}
