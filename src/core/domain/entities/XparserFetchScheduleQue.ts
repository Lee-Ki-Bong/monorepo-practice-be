import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("xparser_fetch_schedule_que", { schema: "makeshop" })
export class XparserFetchScheduleQue {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "shop_id", length: 20 })
  shopId: string;

  @Column("int", { name: "pid_num", default: () => "'0'" })
  pidNum: number;

  @Column("mediumtext", { name: "pid_arr" })
  pidArr: string;

  @Column("varchar", { name: "soap_url", length: 255 })
  soapUrl: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;

  @Column("datetime", { name: "done_date", nullable: true })
  doneDate: Date | null;
}
