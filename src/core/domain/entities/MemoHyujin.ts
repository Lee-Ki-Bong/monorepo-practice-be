import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("memo_hyujin", { schema: "makeshop" })
export class MemoHyujin {
  @PrimaryGeneratedColumn({ type: "int", name: "_id" })
  id: number;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("varchar", { name: "password", length: 40 })
  password: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("varchar", { name: "IP", length: 20 })
  ip: string;

  @Column("varchar", { name: "ipaddress", length: 100 })
  ipaddress: string;

  @Column("enum", {
    name: "ip_access_restriction",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  ipAccessRestriction: "" | "Y" | "N";

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("enum", { name: "show", enum: ["", "Y", "N"], default: () => "'N'" })
  show: "" | "Y" | "N";

  @Column("varchar", { name: "title", length: 20 })
  title: string;

  @Column("varchar", { name: "email", length: 30 })
  email: string;
}
