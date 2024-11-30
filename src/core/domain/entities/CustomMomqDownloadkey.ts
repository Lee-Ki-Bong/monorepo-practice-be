import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_code", ["code"], {})
@Index("index_ip", ["adminuser", "ip"], {})
@Entity("custom_momq_downloadkey", { schema: "makeshop" })
export class CustomMomqDownloadkey {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "code", unsigned: true })
  code: number;

  @Column("varchar", { name: "ip", length: 30 })
  ip: string;

  @Column("mediumtext", { name: "downloadkey", nullable: true })
  downloadkey: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
