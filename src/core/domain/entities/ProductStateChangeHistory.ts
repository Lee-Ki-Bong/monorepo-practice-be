import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_history_idx", ["historyIdx"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Entity("product_state_change_history", { schema: "makeshop" })
export class ProductStateChangeHistory {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("varchar", { primary: true, name: "sto_code", length: 50 })
  stoCode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "history_idx", unsigned: true })
  historyIdx: number;

  @Column("varchar", { name: "now_state", nullable: true, length: 20 })
  nowState: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
