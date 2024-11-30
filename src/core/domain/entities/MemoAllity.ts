import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("memo_allity", { schema: "makeshop" })
export class MemoAllity {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "email", length: 30 })
  email: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "subject", length: 255 })
  subject: string;

  @Column("longtext", { name: "memo" })
  memo: string;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";
}
