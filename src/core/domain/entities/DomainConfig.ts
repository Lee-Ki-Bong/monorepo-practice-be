import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("domain_config", { schema: "makeshop" })
export class DomainConfig {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "domain", length: 255 })
  domain: string;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("enum", {
    name: "status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  status: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
