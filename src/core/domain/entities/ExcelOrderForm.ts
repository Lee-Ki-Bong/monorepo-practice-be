import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_market", ["adminuser", "marketName"], {})
@Index("idx_auto_form_uid", ["formUid"], {})
@Index("market_name", ["marketName"], {})
@Entity("excel_order_form", { schema: "makeshop" })
export class ExcelOrderForm {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "market_name", length: 25 })
  marketName: string;

  @PrimaryGeneratedColumn({ type: "int", name: "form_uid", unsigned: true })
  formUid: number;

  @Column("varchar", { name: "set_name", length: 50 })
  setName: string;

  @Column("varchar", { name: "set_value", length: 10 })
  setValue: string;

  @Column("mediumtext", { name: "set_text", nullable: true })
  setText: string | null;
}
