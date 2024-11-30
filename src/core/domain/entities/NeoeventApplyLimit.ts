import { Column, Entity, Index } from "typeorm";

@Index("match_type", ["adminuser", "limitType", "limitTypeDetail"], {})
@Entity("neoevent_apply_limit", { schema: "makeshop" })
export class NeoeventApplyLimit {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "limit_type", length: 20 })
  limitType: string;

  @Column("varchar", { primary: true, name: "limit_type_detail", length: 10 })
  limitTypeDetail: string;

  @Column("varchar", { name: "limit_start_date", length: 10 })
  limitStartDate: string;

  @Column("varchar", { name: "limit_end_date", length: 10 })
  limitEndDate: string;
}
