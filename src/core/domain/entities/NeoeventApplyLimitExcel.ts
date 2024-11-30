import { Column, Entity } from "typeorm";

@Entity("neoevent_apply_limit_excel", { schema: "makeshop" })
export class NeoeventApplyLimitExcel {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @Column("varchar", { primary: true, name: "user_id", length: 20 })
  userId: string;
}
