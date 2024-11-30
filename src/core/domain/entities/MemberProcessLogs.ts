import { Column, Entity, Index } from "typeorm";

@Index("date", ["mplDate"], {})
@Entity("member_process_logs", { schema: "makeshop" })
export class MemberProcessLogs {
  @Column("int", { primary: true, name: "mc_key", default: () => "'0'" })
  mcKey: number;

  @Column("int", { primary: true, name: "mpl_uid", default: () => "'0'" })
  mplUid: number;

  @Column("varchar", { name: "mpl_type", length: 20 })
  mplType: string;

  @Column("mediumtext", { name: "mpl_content", nullable: true })
  mplContent: string | null;

  @Column("varchar", { name: "mpl_ip", length: 20 })
  mplIp: string;

  @Column("varchar", { name: "mpl_name", length: 20 })
  mplName: string;

  @Column("datetime", {
    name: "mpl_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mplDate: Date;
}
