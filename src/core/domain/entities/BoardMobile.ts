import { Column, Entity, Index } from "typeorm";

@Index("code", ["code"], {})
@Entity("board_mobile", { schema: "makeshop" })
export class BoardMobile {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { primary: true, name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { primary: true, name: "num2", length: 5 })
  num2: string;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

  @Column("varchar", { name: "attach1", length: 100 })
  attach1: string;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "sub_id", length: 20 })
  subId: string;
}
