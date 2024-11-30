import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("premiumbeecon_exception", { schema: "makeshop" })
export class PremiumbeeconException {
  @Column("varchar", { name: "adminuser", length: 32 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "idx", unsigned: true })
  idx: number;

  @Column("char", { name: "cate1", nullable: true, length: 3 })
  cate1: string | null;

  @Column("char", { name: "cate2", nullable: true, length: 3 })
  cate2: string | null;

  @Column("char", { name: "cate3", nullable: true, length: 3 })
  cate3: string | null;

  @Column("varchar", { name: "usergroup_code", nullable: true, length: 50 })
  usergroupCode: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
