import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("naver_checkout_migration_log", { schema: "makeshop" })
export class NaverCheckoutMigrationLog {
  @PrimaryGeneratedColumn({ type: "int", name: "no", unsigned: true })
  no: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    name: "type",
    enum: ["", "CREATE", "UPDATE"],
    default: () => "'CREATE'",
  })
  type: "" | "CREATE" | "UPDATE";

  @Column("mediumtext", { name: "log_text", nullable: true })
  logText: string | null;
}
