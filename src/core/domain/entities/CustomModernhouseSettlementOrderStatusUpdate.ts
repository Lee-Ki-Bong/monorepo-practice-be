import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("admin_chk", ["adminuser", "chkDate"], {})
@Index("admin_reg", ["adminuser", "regDate"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("custom_modernhouse_settlement_order_status_update", {
  schema: "makeshop",
})
export class CustomModernhouseSettlementOrderStatusUpdate {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("date", { name: "chk_date", default: () => "'0000-00-00'" })
  chkDate: string;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
