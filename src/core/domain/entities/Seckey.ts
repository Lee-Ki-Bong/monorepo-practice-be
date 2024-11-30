import { Column, Entity } from "typeorm";

@Entity("seckey", { schema: "makeshop" })
export class Seckey {
  @Column("varchar", { primary: true, name: "hashkey", length: 32 })
  hashkey: string;

  @Column("varchar", { name: "seckey", nullable: true, length: 64 })
  seckey: string | null;

  @Column("varchar", { name: "iv", nullable: true, length: 32 })
  iv: string | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "ip", nullable: true, length: 39 })
  ip: string | null;
}
