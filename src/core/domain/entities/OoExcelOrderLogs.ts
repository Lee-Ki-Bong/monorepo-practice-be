import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser"], {})
@Entity("oo_excel_order_logs", { schema: "makeshop" })
export class OoExcelOrderLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "market", length: 20 })
  market: string;

  @Column("datetime", {
    name: "add_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  addDate: Date;

  @Column("datetime", {
    name: "complate_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  complateDate: Date;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;
}
