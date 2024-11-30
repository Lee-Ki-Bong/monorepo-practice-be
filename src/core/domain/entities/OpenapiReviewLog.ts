import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_date", ["adminuser", "date"], {})
@Index("code_reg_date", ["adminuser", "uid"], {})
@Entity("openapi_review_log", { schema: "makeshop" })
export class OpenapiReviewLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "type",
    enum: ["", "create", "update"],
    default: () => "'create'",
  })
  type: "" | "create" | "update";

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "date", length: 14 })
  date: string;

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
