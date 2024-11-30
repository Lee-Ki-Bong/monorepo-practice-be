import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_cidx", ["cidx"], {})
@Entity("tip_code", { schema: "makeshop" })
export class TipCode {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "cidx" })
  cidx: number;

  @Column("varchar", { primary: true, name: "tipnum", length: 8 })
  tipnum: string;

  @Column("char", { name: "xcode", nullable: true, length: 3 })
  xcode: string | null;

  @Column("char", { name: "mcode", nullable: true, length: 3 })
  mcode: string | null;

  @Column("char", { name: "scode", nullable: true, length: 3 })
  scode: string | null;

  @Column("datetime", { name: "regdate", nullable: true })
  regdate: Date | null;
}
