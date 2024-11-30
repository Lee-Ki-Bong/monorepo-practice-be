import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_idx", ["idx"], {})
@Index("idx_udi", ["adminuser", "udi"], {})
@Index("ordernum", ["ordernum"], {})
@Entity("seil_order_udi", { schema: "makeshop" })
export class SeilOrderUdi {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "udi", length: 255, default: () => "'0'" })
  udi: string;

  @Column("date", { name: "send_date", default: () => "'0000-00-00'" })
  sendDate: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("varchar", { name: "lot_num", length: 255, default: () => "'0'" })
  lotNum: string;

  @Column("varchar", { name: "serial_num", length: 255, default: () => "'0'" })
  serialNum: string;

  @Column("date", { name: "make_date", default: () => "'0000-00-00'" })
  makeDate: string;

  @Column("date", { name: "use_date", default: () => "'0000-00-00'" })
  useDate: string;

  @Column("varchar", { name: "insure_code", length: 24 })
  insureCode: string;
}
