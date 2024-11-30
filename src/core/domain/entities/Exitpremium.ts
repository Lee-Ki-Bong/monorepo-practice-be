import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Index("status", ["status"], {})
@Entity("exitpremium", { schema: "makeshop" })
export class Exitpremium {
  @PrimaryGeneratedColumn({ type: "int", name: "pid" })
  pid: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "hname", length: 10 })
  hname: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "phone", length: 15 })
  phone: string;

  @Column("varchar", { name: "shopname", length: 50 })
  shopname: string;

  @Column("varchar", { name: "shopurl", length: 50 })
  shopurl: string;

  @Column("varchar", { name: "exit_reason", length: 7, default: () => "'D'" })
  exitReason: string;

  @Column("mediumtext", { name: "etc_content" })
  etcContent: string;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("char", { name: "status", length: 1, default: () => "'N'" })
  status: string;

  @Column("datetime", {
    name: "okdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  okdate: Date;

  @Column("varchar", { name: "confirmor", length: 10 })
  confirmor: string;
}
