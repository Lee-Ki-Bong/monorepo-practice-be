import { Column, Entity } from "typeorm";

@Entity("yahoocategory", { schema: "makeshop" })
export class Yahoocategory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("varchar", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("char", { name: "S001", nullable: true, length: 1 })
  s001: string | null;

  @Column("char", { name: "S002", nullable: true, length: 1 })
  s002: string | null;

  @Column("char", { name: "S003", nullable: true, length: 1 })
  s003: string | null;

  @Column("char", { name: "S004", nullable: true, length: 1 })
  s004: string | null;

  @Column("char", { name: "S005", nullable: true, length: 1 })
  s005: string | null;

  @Column("char", { name: "S006", nullable: true, length: 1 })
  s006: string | null;

  @Column("char", { name: "S007", nullable: true, length: 1 })
  s007: string | null;

  @Column("char", { name: "S008", nullable: true, length: 1 })
  s008: string | null;

  @Column("char", { name: "S009", nullable: true, length: 1 })
  s009: string | null;

  @Column("char", { name: "S010", nullable: true, length: 1 })
  s010: string | null;

  @Column("char", { name: "S011", nullable: true, length: 1 })
  s011: string | null;

  @Column("char", { name: "S012", nullable: true, length: 1 })
  s012: string | null;

  @Column("varchar", { name: "remark", nullable: true, length: 40 })
  remark: string | null;

  @Column("varchar", { name: "diarydate", nullable: true, length: 8 })
  diarydate: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
