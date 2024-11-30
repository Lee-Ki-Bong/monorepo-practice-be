import { Column, Entity } from "typeorm";

@Entity("tmp_comment", { schema: "makeshop" })
export class TmpComment {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1num2", length: 14 })
  num1num2: string;

  @Column("varchar", { name: "hname", length: 20 })
  hname: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", { name: "sub_id", nullable: true, length: 12 })
  subId: string | null;

  @Column("varchar", { name: "password", length: 10 })
  password: string;

  @Column("mediumtext", { name: "comment", nullable: true })
  comment: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
