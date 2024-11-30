import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("company_id", ["adminuser", "companyId"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("openapi_process_log", { schema: "makeshop" })
export class OpenapiProcessLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "type", length: 50 })
  type: string;

  @Column("varchar", { primary: true, name: "type_id", length: 30 })
  typeId: string;

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
