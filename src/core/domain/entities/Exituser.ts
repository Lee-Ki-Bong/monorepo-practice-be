import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Index("idx_company", ["adminuser", "companyNum"], {})
@Index("idx_email", ["adminuser", "email"], {})
@Index("okdate", ["adminuser", "okdate"], {})
@Index("totaldate", ["date"], {})
@Entity("exituser", { schema: "makeshop" })
export class Exituser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 30 })
  id: string;

  @Column("enum", {
    name: "mem_type",
    enum: ["", "PERSON", "COMPANY"],
    default: () => "'PERSON'",
  })
  memType: "" | "PERSON" | "COMPANY";

  @Column("varchar", { name: "hname", nullable: true, length: 10 })
  hname: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("varchar", { name: "company_num", length: 20 })
  companyNum: string;

  @Column("char", {
    name: "vaild",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  vaild: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "okdate", nullable: true, length: 14 })
  okdate: string | null;

  @Column("mediumtext", { name: "exit_reason", nullable: true })
  exitReason: string | null;

  @Column("varchar", { name: "delete_date", nullable: true, length: 8 })
  deleteDate: string | null;

  @Column("int", { name: "user_idx", nullable: true })
  userIdx: number | null;

  @Column("int", { name: "reserve", nullable: true })
  reserve: number | null;

  @Column("varchar", { name: "join_date", nullable: true, length: 14 })
  joinDate: string | null;
}
