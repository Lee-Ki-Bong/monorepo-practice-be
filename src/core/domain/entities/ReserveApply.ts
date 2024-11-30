import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("get_config_id", ["adminuser", "reserveCid"], {})
@Index("idx_auto_uid", ["uid"], {})
@Index(
  "reserve_type",
  ["adminuser", "reserveType", "optionCode", "endDate"],
  {}
)
@Entity("reserve_apply", { schema: "makeshop" })
export class ReserveApply {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "reserve_type", length: 50 })
  reserveType: string;

  @Column("varchar", { primary: true, name: "option_code", length: 10 })
  optionCode: string;

  @Column("int", { name: "reserve_cid", unsigned: true, default: () => "'0'" })
  reserveCid: number;

  @Column("datetime", {
    name: "start_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  startDate: Date;

  @Column("datetime", {
    name: "end_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  endDate: Date;
}
