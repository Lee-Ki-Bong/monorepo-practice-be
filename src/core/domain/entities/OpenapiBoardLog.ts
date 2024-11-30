import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("code_num1", ["code", "num1"], {})
@Index("code_reg_date", ["code", "regDate"], {})
@Entity("openapi_board_log", { schema: "makeshop" })
export class OpenapiBoardLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("enum", {
    name: "type",
    enum: [
      "",
      "create",
      "update",
      "answer",
      "comment_create",
      "comment_update",
    ],
    default: () => "'create'",
  })
  type:
    | ""
    | "create"
    | "update"
    | "answer"
    | "comment_create"
    | "comment_update";

  @Column("varchar", { name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "num1", length: 7 })
  num1: string;

  @Column("varchar", { name: "num2", nullable: true, length: 5 })
  num2: string | null;

  @Column("int", { name: "company_id", unsigned: true, default: () => "'0'" })
  companyId: number;

  @Column("mediumtext", { name: "text" })
  text: string;

  @Column("varchar", { name: "ip", nullable: true, length: 16 })
  ip: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
