import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Entity("mh_product_upload_log", { schema: "makeshop" })
export class MhProductUploadLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 13 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid" })
  uid: number;

  @Column("char", { name: "type", length: 1 })
  type: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("varchar", { name: "reg_id", length: 20 })
  regId: string;

  @Column("int", { name: "total", default: () => "'0'" })
  total: number;

  @Column("int", { name: "succ", default: () => "'0'" })
  succ: number;

  @Column("char", { name: "display", length: 1, default: () => "'Y'" })
  display: string;

  @Column("varchar", { name: "result_file", nullable: true, length: 40 })
  resultFile: string | null;
}
