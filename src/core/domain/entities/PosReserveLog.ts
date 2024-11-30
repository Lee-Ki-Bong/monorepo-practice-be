import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_muid", ["muid", "regDate"], {})
@Index("idx_rcsno", ["rcsno"], {})
@Index("idx_reg", ["regDate"], {})
@Index("idx_rtype", ["rtype"], {})
@Entity("pos_reserve_log", { schema: "makeshop" })
export class PosReserveLog {
  @PrimaryGeneratedColumn({ type: "int", name: "sno", unsigned: true })
  sno: number;

  @Column("int", { name: "muid", unsigned: true, default: () => "'0'" })
  muid: number;

  @Column("int", { name: "before_r", default: () => "'0'" })
  beforeR: number;

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("int", { name: "rtype", unsigned: true, default: () => "'0'" })
  rtype: number;

  @Column("varchar", { name: "memo", length: 200 })
  memo: string;

  @Column("int", { name: "rcsno", unsigned: true, default: () => "'0'" })
  rcsno: number;

  @Column("varchar", { name: "ip", length: 20 })
  ip: string;

  @Column("int", { name: "pos_shop_uid", unsigned: true, default: () => "'0'" })
  posShopUid: number;

  @Column("int", { name: "worker_uid", unsigned: true, default: () => "'0'" })
  workerUid: number;

  @Column("int", {
    name: "pos_seller_uid",
    unsigned: true,
    default: () => "'0'",
  })
  posSellerUid: number;

  @Column("date", { name: "reg_date", default: () => "'0000-00-00'" })
  regDate: string;

  @Column("time", { name: "reg_time", default: () => "'00:00:00'" })
  regTime: string;
}
