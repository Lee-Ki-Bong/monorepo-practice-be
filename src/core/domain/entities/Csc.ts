import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_csc_id", ["cscId"], {})
@Index("psi_id", ["psiId"], { unique: true })
@Entity("csc", { schema: "makeshop" })
export class Csc {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", { primary: true, name: "cate1", length: 3 })
  cate1: string;

  @Column("char", { primary: true, name: "cate2", length: 3 })
  cate2: string;

  @Column("char", { primary: true, name: "cate3", length: 3 })
  cate3: string;

  @PrimaryGeneratedColumn({ type: "int", name: "csc_id", unsigned: true })
  cscId: number;

  @Column("int", {
    name: "psi_id",
    unique: true,
    unsigned: true,
    default: () => "'0'",
  })
  psiId: number;
}
